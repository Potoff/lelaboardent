import { defineConfig } from 'astro/config';

// Domaine canonical = .com (le .fr redirige)
export default defineConfig({
  site: 'https://laboardent.com',
  build: { inlineStylesheets: 'auto' },
});
