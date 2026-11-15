// Records that a photograph has been signed off for the site: its file name, a fingerprint of its
// exact contents, and the date. Run it only once the person who signs off the site's imagery has said yes.
//
//   npm run photo:approve -- p01-morning-desk.jpg [another.jpg …]
//   npm run photo:approve -- --all
//
// A photograph that is changed afterwards no longer matches its fingerprint, and the build fails
// until it is approved again.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const dir = path.resolve('src/assets/photos');
const listPath = path.resolve('src/data/photos-approved.json');
const isImage = (f) => /\.(jpe?g|png|webp|avif)$/i.test(f);
const args = process.argv.slice(2);
const present = fs.existsSync(dir) ? fs.readdirSync(dir).filter(isImage) : [];
const names = args.includes('--all') ? present : args.filter((a) => !a.startsWith('--')).map((a) => path.basename(a));
if (!names.length) { console.error('photo-approve: name one or more files in src/assets/photos/, or pass --all'); process.exit(1); }

const list = fs.existsSync(listPath) ? JSON.parse(fs.readFileSync(listPath, 'utf8')) : { note: '', approved: {} };
list.note = 'Photographs signed off for the site. Each entry is a file in src/assets/photos/, a fingerprint of its exact contents, and the date it was approved. Written by tools/photo-approve.mjs; do not edit by hand.';
const today = new Date().toISOString().slice(0, 10);
for (const name of names) {
  if (!present.includes(name)) { console.error(`photo-approve: ${name} is not in src/assets/photos/`); process.exit(1); }
  const sha256 = crypto.createHash('sha256').update(fs.readFileSync(path.join(dir, name))).digest('hex');
  const before = list.approved[name];
  list.approved[name] = { sha256, on: before && before.sha256 === sha256 ? before.on : today };
  console.log(`approved  ${name}  ${sha256.slice(0, 12)}…  ${list.approved[name].on}`);
}
list.approved = Object.fromEntries(Object.entries(list.approved).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync(listPath, JSON.stringify(list, null, 2) + '\n');
