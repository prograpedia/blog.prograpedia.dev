import { defineCollection, z } from 'astro:content';
import {docsLoader} from "@astrojs/starlight/loaders";
import {docsSchema} from "@astrojs/starlight/schema";

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Anonymous'),
  }),
});

const docsCollection = defineCollection({ schema: docsSchema()})

export const collections = {
  'blog': blogCollection,
  'docs': docsCollection,
};
