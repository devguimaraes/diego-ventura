import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sitemap({
      lastmod: new Date(),
      changefreq: 'monthly',
      priority: 1.0,
    }),
  ],
  output: 'static',
  site: 'https://dr-dhiego-ventura.vercel.app',
});
