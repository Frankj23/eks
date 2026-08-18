// Verifies every internal href in dist/ resolves to a real built file.
import { readdirSync, readFileSync, statSync, existsSync } from 'fs';
import { join, relative } from 'path';

const DIST = 'dist';
const files = [];
(function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p);
  }
})(DIST);

const broken = new Map();
let total = 0;

for (const f of files) {
  const html = readFileSync(f, 'utf8');
  for (const m of html.matchAll(/href="([^"]+)"/g)) {
    let href = m[1];
    if (/^(https?:|mailto:|tel:|#|data:)/.test(href)) {
      if (href === '#') {
        const k = `${relative(DIST, f)} → "#" (placeholder link)`;
        broken.set(k, (broken.get(k) || 0) + 1);
      }
      continue;
    }
    total++;
    const path = href.split('#')[0].split('?')[0];
    if (path === '' || path === '/') continue;
    const clean = path.replace(/^\//, '').replace(/\/$/, '');
    const ok =
      existsSync(join(DIST, clean)) ||
      existsSync(join(DIST, `${clean}.html`)) ||
      existsSync(join(DIST, clean, 'index.html'));
    if (!ok) {
      const k = `${href}  (from ${relative(DIST, f)})`;
      broken.set(k, (broken.get(k) || 0) + 1);
    }
  }
}

console.log(`Checked ${total} internal links across ${files.length} pages.`);
if (broken.size === 0) {
  console.log('✅ No broken internal links, no "#" placeholders.');
} else {
  console.log(`❌ ${broken.size} problem(s):\n`);
  for (const [k, v] of broken) console.log(`   ${k}${v > 1 ? ` ×${v}` : ''}`);
  process.exit(1);
}
