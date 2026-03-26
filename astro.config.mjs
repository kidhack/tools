import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL ?? 'https://kidhack.github.io';
const base = process.env.BASE_PATH ?? '/tools';

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  output: 'static',
});
