import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {deskStructure} from './schemaTypes/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'alvis',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [structureTool({structure:deskStructure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
