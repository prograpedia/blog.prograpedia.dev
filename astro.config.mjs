import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

import expressiveCode from 'astro-expressive-code';

import markdoc from '@astrojs/markdoc';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

import starlight from '@astrojs/starlight';

import { remarkModifiedTime } from './plugins/remark-modified-time.mjs';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkModifiedTime]
  },
  integrations: [
    expressiveCode(),
    mdx(),
    markdoc(),
    sitemap(),
    partytown(),
    starlight({
      title: 'Prograpedia Docs',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
