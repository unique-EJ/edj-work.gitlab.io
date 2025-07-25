// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const subModuleRepositoryContent = defineCollection({
    loader: glob({ pattern: "*/sub-site/**/*.md", base: "./subModuleMarkdown/" }),
    schema: z.object({
        title: z.coerce.string().default('')
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { subModuleRepositoryContent };