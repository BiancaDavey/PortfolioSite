import { defineCollection, z } from 'astro:content';

export const collections = {
	projects: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			preview_tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			img2: z.string().optional(),
			img2_alt: z.string().optional(),
			img3: z.string().optional(),
			img3_alt: z.string().optional(),
		}),
	}),
};
