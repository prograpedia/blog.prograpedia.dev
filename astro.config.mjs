import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

import expressiveCode from "astro-expressive-code";

import markdoc from "@astrojs/markdoc";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import { remarkAlert } from "remark-github-blockquote-alert";
import { remarkModifiedTime } from "./plugins/remark-modified-time.mjs";

import icon from "astro-icon";

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkModifiedTime, [remarkAlert, { legacyTitle: true }]],
  },
  integrations: [expressiveCode(), mdx(), markdoc(), sitemap(), partytown(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});