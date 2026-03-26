import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL ?? 'https://tools.abl.design';

export default defineConfig({
  site,
  integrations: [sitemap()],
  output: 'static',
});
