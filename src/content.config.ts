import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const projects = defineCollection({
  loader: file('src/content/projects/projects.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    company: z.string().optional(),
    link: z.string().nullable(),
    excerpt: z.string(),
    description: z.string(),
    imageUrl: z.string(),
    technologies: z.array(z.string()),
    role: z.string(),
    tasks: z.array(z.string()),
    achievements: z.array(z.string()),
    contributions: z.array(z.string()),
  }),
});

export const collections = { projects };
