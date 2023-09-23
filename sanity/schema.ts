import { type SchemaTypeDefinition } from 'sanity'
import { products } from './lib/product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products],
}
