// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://huzaifa-0.github.io',
  integrations: [react(), sitemap()],

  // CSS is ~8 KiB gzipped: inline it so it doesn't block first paint.
  build: { inlineStylesheets: 'always' },

  image: { domains: ['images.unsplash.com'] },

  // Self-hosted Inter (variable, latin only) instead of the render-blocking Google Fonts CSS.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
    },
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});