import { defineConfig } from 'astro/config';

// One place to change at cut-over: set `site` to the production origin and remove `base`.
export default defineConfig({
  site: 'https://bcarvalho3012.github.io',
  base: '/TrisianNEW',
  trailingSlash: 'always',
  compressHTML: false,
  devToolbar: { enabled: false },
  server: { port: 4321 },
});
