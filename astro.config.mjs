// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
    output: 'static',
    outDir: './public',
    build: {
        // Generate a directory (with 'index.html') for each page, the default option.
        format: 'directory'
    },
    srcDir: './source-root',
    publicDir: './static-root'
});