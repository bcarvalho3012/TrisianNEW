// No photograph ships without sign-off. Every image file in src/assets/photos/ must:
//   - belong to a photo window in src/data/photos.json;
//   - be recorded as approved in src/data/photos-approved.json, with a fingerprint that still matches the file;
//   - have alt text for its window, unless the window is decorative.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const dir = path.resolve('src/assets/photos');
const manifest = JSON.parse(fs.readFileSync(path.resolve('src/data/photos.json'), 'utf8'));
const listPath = path.resolve('src/data/photos-approved.json');
const approved = fs.existsSync(listPath) ? JSON.parse(fs.readFileSync(listPath, 'utf8')).approved ?? {} : {};
const isImage = (f) => /\.(jpe?g|png|webp|avif)$/i.test(f);
const base = (f) => f.replace(/\.[^.]+$/, '');
const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(isImage) : [];
let problems = 0;
const bad = (msg) => { problems++; console.error(`✗ ${msg}`); };

const slotsByFile = new Map();
for (const [id, spec] of Object.entries(manifest.slots)) {
  if (!slotsByFile.has(spec.file)) slotsByFile.set(spec.file, []);
  slotsByFile.get(spec.file).push([id, spec]);
}

const seen = new Set();
for (const f of files) {
  const name = base(f);
  if (seen.has(name)) bad(`${f}: a second file with the same name as another photograph`);
  seen.add(name);
  const slots = slotsByFile.get(name);
  if (!slots) { bad(`${f}: not used by any photo window in src/data/photos.json`); continue; }
  const entry = approved[f];
  if (!entry) bad(`${f}: not approved (npm run photo:approve, once it has been signed off)`);
  else {
    const sha256 = crypto.createHash('sha256').update(fs.readFileSync(path.join(dir, f))).digest('hex');
    if (entry.sha256 !== sha256) bad(`${f}: changed since it was approved`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.on ?? '')) bad(`${f}: its approval has no date`);
  }
  for (const [id, spec] of slots) {
    if (!spec.decorative && !String(spec.alt ?? '').trim()) bad(`${f}: window "${id}" has no alt text`);
  }
}
for (const f of Object.keys(approved)) if (!files.includes(f)) bad(`the approved list names ${f}, which is not in src/assets/photos/`);

const eraFiles = Object.values(manifest.eras).map((id) => manifest.slots[id]?.file);
const eraPresent = eraFiles.filter((f) => seen.has(f)).length;
if (eraPresent > 0 && eraPresent < eraFiles.length) console.warn(`note: ${eraPresent} of ${eraFiles.length} era desks are present. They are shown as a set or not at all.`);

if (problems) { console.error(`photo-check: ${problems} problem(s)`); process.exit(1); }
console.log(files.length ? `photo-check: ${files.length} photograph(s), all placed and approved` : 'photo-check: no photographs yet; windows show coded daylight');
