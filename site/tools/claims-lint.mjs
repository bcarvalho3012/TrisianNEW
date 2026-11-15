// Fails the build if the built pages contain a claim the business does not make, or a word the brand
// has retired. The list mirrors the project's claims ledger. Run after `astro build`.
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const banned = [
  [/\b\d{2,3}(\.\d+)?\s?%\s*(uptime|availability)|\buptime\b|zero[- ]downtime|\balways[- ]on\b|\buninterrupted\b/i, 'availability claim'],
  [/\bnightly\b|every night|wiped? at midnight/i, 'desktops are not reset nightly: sessions end at sign-out'],
  [/\bat cost\b|makes? nothing|zero[- ]margin/i, 'say "passed through, no markup"'],
  [/HIPAA[- ]compliant|SOC ?2[- ]certified|keeps? you compliant|guarantee[sd]? compliance|\bBAA\b/i, 'compliance claim'],
  [/managed detection|\bMDR\b|threat hunting|\bour SOC\b/i, 'not a service on offer'],
  [/\b\d[\d,]*\+?\s+(clients|customers)\b/i, 'client count'],
  [/peace of mind|\bsolutions?\b|\bjourney\b|\bleverag(e|ing)\b|strategic partner|\binnovati(on|ve)\b|\binvisible\b|defensible calm|trusted partner|best[- ]in[- ]class|world[- ]class|cutting[- ]edge|\bseamless(ly)?\b|\bempower|\bunlock|\belevate\b|\brobust\b|military[- ]grade|bank[- ]level/i, 'retired or filler word'],
  [/\bagentic\b|AI[- ]powered|AI era/i, 'not in our headlines'],
  [/\blicence\b/i, 'US spelling: license'],
  [/\bmanaged IT\b/i, 'the product is a managed workspace, not managed IT'],
  [/\bExpressRoute\b/i, 'say "a private connection"'],
  [/Azure Virtual Desktop or (on )?Citrix/i, 'Azure Virtual Desktop leads; Citrix is not presented as an equal'],
  [/PHOTO PENDING|lorem ipsum|TODO|TBD/i, 'placeholder text'],
];

const pages = [];
const walk = (dir) => { for (const f of fs.readdirSync(dir, { withFileTypes: true })) { const p = path.join(dir, f.name); if (f.isDirectory()) walk(p); else if (f.name.endsWith('.html')) pages.push(p); } };
if (!fs.existsSync(dist)) { console.error('claims-lint: no dist/ — run the build first'); process.exit(1); }
walk(dist);

let failures = 0;
for (const page of pages) {
  const html = fs.readFileSync(page, 'utf8');
  // Reader-facing text: visible text, alt text, labels, titles and meta descriptions.
  const attrs = [...html.matchAll(/\b(?:alt|aria-label|title|content|placeholder)="([^"]*)"/g)].map((m) => m[1]).join('\n');
  const text = (html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<!--[\s\S]*?-->/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ') + '\n' + attrs);
  for (const [re, why] of banned) {
    const m = re.exec(text);
    if (m) { failures++; console.error(`✗ ${path.relative(dist, page)}: "${m[0]}" — ${why}`); }
  }
}
if (failures) { console.error(`claims-lint: ${failures} problem(s) in ${pages.length} page(s)`); process.exit(1); }
console.log(`claims-lint: ${pages.length} page(s) clean`);
