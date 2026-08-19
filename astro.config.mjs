// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// GitHub Pages: https://nathanillounz.github.io/Personal-websit-igor
export default defineConfig({
  site: 'https://nathanillounz.github.io',
  base: '/Personal-websit-igor',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'he'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', he: 'he' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
