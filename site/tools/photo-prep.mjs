// Prepares one approved frame for its photo window: crops it to the window's ratio around a focal
// point, caps its size, applies the single site grade, and writes the master into src/assets/photos/.
// The build makes the AVIF, WebP and JPEG sizes from that master.
//
//   node tools/photo-prep.mjs <source-image> <slot> [--focus 0.5,0.4] [--dry]
//
// <slot> is a key in src/data/photos.json. --focus is the point to keep centered, as fractions of
// the source width and height (default: the middle). --dry reports without writing.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

// The site grade. One setting for every photograph, chosen once on the first approved frames.
// Neutral until then: no change to color or contrast.
const GRADE = { saturation: 1, brightness: 1 };
const MAX_WIDTH = 2400;
const SMALL = 1600;

const [source, slot, ...rest] = process.argv.slice(2);
const flag = (name) => { const i = rest.indexOf(name); return i === -1 ? null : rest[i + 1] ?? true; };
const dry = rest.includes('--dry');
const fail = (msg) => { console.error(`photo-prep: ${msg}`); process.exit(1); };

const manifest = JSON.parse(fs.readFileSync(path.resolve('src/data/photos.json'), 'utf8'));
if (!source || !slot) fail('usage: node tools/photo-prep.mjs <source-image> <slot> [--focus x,y] [--dry]');
const spec = manifest.slots[slot];
if (!spec) fail(`no window called "${slot}". Windows: ${Object.keys(manifest.slots).join(', ')}`);
if (!fs.existsSync(source)) fail(`cannot find ${source}`);

const [rw, rh] = spec.ratio.split(':').map(Number);
const ratio = rw / rh;
const focus = String(flag('--focus') ?? '0.5,0.5').split(',').map(Number);
if (focus.length !== 2 || focus.some((n) => !(n >= 0 && n <= 1))) fail('--focus takes two fractions between 0 and 1, like 0.5,0.4');

const input = sharp(source).rotate();
const meta = await input.metadata();
const W = meta.width, H = meta.height;

// The largest rectangle of the window's ratio that fits the source, centered on the focal point, kept inside the frame.
let cw = W, ch = Math.round(W / ratio);
if (ch > H) { ch = H; cw = Math.round(H * ratio); }
const left = Math.min(Math.max(Math.round(focus[0] * W - cw / 2), 0), W - cw);
const top = Math.min(Math.max(Math.round(focus[1] * H - ch / 2), 0), H - ch);
const outW = Math.min(cw, MAX_WIDTH);
const outH = Math.round(outW / ratio);

const outDir = path.resolve('src/assets/photos');
const outFile = path.join(outDir, `${spec.file}.jpg`);
console.log(`source   ${W} × ${H}`);
console.log(`crop     ${cw} × ${ch} at ${left},${top}  (${spec.ratio}, focus ${focus.join(',')})`);
console.log(`master   ${outW} × ${outH}  →  ${path.relative(process.cwd(), outFile)}`);
if (outW < SMALL) console.warn(`warning  the master is under ${SMALL}px wide. It will look soft in a full-width window. Generate larger, or upscale at the source.`);
if (dry) { console.log('dry run: nothing written'); process.exit(0); }

fs.mkdirSync(outDir, { recursive: true });
let img = input.extract({ left, top, width: cw, height: ch }).resize({ width: outW, withoutEnlargement: true });
if (GRADE.saturation !== 1 || GRADE.brightness !== 1) img = img.modulate(GRADE);
await img.jpeg({ quality: 92, chromaSubsampling: '4:4:4', mozjpeg: true }).toFile(outFile);

console.log('\nwritten. Next: rewrite the alt text for this window in src/data/photos.json so it describes this frame.');
console.log(`Once it has been signed off: npm run photo:approve -- ${spec.file}.jpg`);
