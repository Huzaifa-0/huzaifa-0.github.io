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

const nameDesc = z.object({ name: z.string(), description: z.string() });

const caseStudies = defineCollection({
  loader: file('src/content/case-studies/caseStudies.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    tagline: z.string(),
    role: z.string(),
    type: z.string().optional(),
    status: z.string().optional(),
    relatedProjectId: z.string().optional(),
    tags: z.array(z.string()),
    summary: z.string(),
    problem: z.object({ context: z.string(), challenges: z.array(z.string()) }),
    solution: z.object({ approach: z.array(z.string()), features: z.array(nameDesc) }),
    architecture: z.object({
      style: z.string(),
      diagram: z.string().optional(),
      layers: z.array(z.object({ name: z.string(), tech: z.string().optional(), detail: z.string() })),
      keyBoundaries: z.array(z.string()).optional(),
      flows: z.array(z.object({ name: z.string(), steps: z.array(z.string()) })).optional(),
      queues: z.array(z.string()).optional(),
      scheduledMaintenance: z.array(z.string()).optional(),
    }),
    guardrailLogic: z.record(z.string(), z.string()).optional(),
    apiSurface: z.array(z.object({ method: z.string(), path: z.string(), purpose: z.string() })).optional(),
    techStack: z.record(z.string(), z.array(z.string())),
    keyDecisions: z
      .array(z.object({ decision: z.string(), reason: z.string(), tradeoff: z.string().optional() }))
      .optional(),
    challenges: z
      .array(z.object({ challenge: z.string(), solution: z.string(), outcome: z.string().optional() }))
      .optional(),
    lessons: z.array(z.object({ challenge: z.string(), lesson: z.string() })).optional(),
    engineering: z.array(z.string()),
    demo: z
      .object({
        primaryUser: z.string(),
        workflow: z.array(z.string()),
        data: z.object({
          note: z.string(),
          student: z.string(),
          records: z.array(z.string()),
          expectedOutput: z.string(),
        }),
      })
      .optional(),
    dataModel: z.array(z.string()).optional(),
    outcomes: z.array(z.string()).optional(),
    metrics: z
      .object({ note: z.string(), items: z.array(z.object({ label: z.string(), value: z.string().nullable() })) })
      .optional(),
    screenshots: z.array(z.object({ caption: z.string(), src: z.string() })).optional(),
    limitations: z.array(z.string()).optional(),
    nextSteps: z.array(z.string()).optional(),
    links: z.object({
      repository: z.string().nullable().optional(),
      liveDemo: z.string().nullable().optional(),
      apiDocs: z.string().nullable().optional(),
    }),
  }),
});

export const collections = { projects, caseStudies };
