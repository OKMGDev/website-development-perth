import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const seoSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    primaryKeyword: z.string(),
    excerpt: z.string(),
    glance: z
      .object({
        who: z.string(),
        timeline: z.string(),
        platforms: z.string(),
        bestWhen: z.string(),
      })
      .optional(),
    benefits: z.array(z.string()),
    process: z.array(z.string()),
    faqs: z.array(faqSchema).default([]),
    relatedIndustries: z.array(z.string()).default([]),
    relatedServices: z.array(z.string()).default([]),
    seo: seoSchema,
  }),
});

const industries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/industries' }),
  schema: z.object({
    title: z.string(),
    primaryKeyword: z.string(),
    excerpt: z.string(),
    painPoints: z.array(z.string()),
    workflows: z.array(z.string()),
    objections: z.array(z.string()),
    relatedServices: z.array(z.string()).default([]),
    faqs: z.array(faqSchema).default([]),
    seo: seoSchema,
  }),
});

const locations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/locations' }),
  schema: z.object({
    title: z.string(),
    suburb: z.string(),
    publish: z.boolean().default(true),
    primaryKeyword: z.string(),
    excerpt: z.string(),
    localContext: z.string(),
    nearbyAreas: z.array(z.string()).default([]),
    faqs: z.array(faqSchema).default([]),
    areaServed: z.string(),
    seo: seoSchema,
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    author: z.string().default('Website Development Perth'),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    takeaways: z.array(z.string()).default([]),
    relatedServices: z.array(z.string()).default([]),
    seo: seoSchema,
  }),
});

export const collections = { services, industries, locations, blog };
