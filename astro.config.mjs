// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: change to the real domain before the production build.
  // This drives canonical URLs and sitemap.xml.
  site: 'https://ekstech.com',

  integrations: [sitemap()],

  // Hostinger serves static files. `format: 'file'` writes about.html rather
  // than about/index.html, which behaves more predictably on shared hosting.
  build: { format: 'file' },

  vite: { plugins: [tailwindcss()] },
});
