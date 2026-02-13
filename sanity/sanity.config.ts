import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schema } from './schema';

export default defineConfig({
  name: 'default',
  title: 'Shopify Editions Winter 2026',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [deskTool()],
  schema,
});
