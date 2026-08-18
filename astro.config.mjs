// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

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
  vite: {
    plugins: [tailwindcss()],
  },
});
