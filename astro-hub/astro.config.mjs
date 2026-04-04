// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.datas.ma', // Domaine personnalisé
  output: 'static',
  integrations: [react(), markdoc(), keystatic()]
});
