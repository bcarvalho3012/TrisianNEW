// Recomputes the contrast of every text/ground pairing in the design tokens against WCAG 2.x.
import fs from 'node:fs';

const css = fs.readFileSync('src/styles/tokens.css', 'utf8');
const token = (name) => { const m = new RegExp(`--${name}:\\s*(#[0-9A-Fa-f]{6})`).exec(css); if (!m) throw new Error(`token --${name} not found`); return m[1]; };
const lum = (h) => { const c = h.slice(1).match(/../g).map((x) => parseInt(x, 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };

const light = ['ground-morning', 'ground-noon', 'ground-gold', 'ground-dusk', 'ground-sunk'];
const checks = [];
for (const g of light) {
  for (const t of ['ink', 'ink-2', 'ink-3', 'cobalt', 'bright']) checks.push([t, g, 4.5]);
}
for (const t of ['night-ink', 'night-ink-2', 'night-ink-3', 'sky']) { checks.push([t, 'ground-night', 4.5]); checks.push([t, 'ground-night-2', 4.5]); }
checks.push(['control-border', 'ground-morning', 3], ['control-border', 'ground-noon', 3]);

let failed = 0;
for (const [fg, bg, min] of checks) {
  const r = ratio(token(fg), token(bg));
  if (r < min) { failed++; console.error(`✗ --${fg} on --${bg}: ${r.toFixed(2)} (needs ${min})`); }
}
// White text on the two fills used for buttons
for (const fill of ['cobalt', 'cobalt-deep']) { const r = ratio('#FFFFFF', token(fill)); if (r < 4.5) { failed++; console.error(`✗ white on --${fill}: ${r.toFixed(2)}`); } }
if (failed) { console.error(`contrast-check: ${failed} pairing(s) below threshold`); process.exit(1); }
console.log(`contrast-check: ${checks.length + 2} pairings pass`);
