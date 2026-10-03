// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://huzaifa-0.github.io',
  integrations: [react(), sitemap()],

  image: { domains: ['images.unsplash.com'] },

  vite: {
    plugins: [tailwindcss()]
  }
});