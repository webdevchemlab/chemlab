import type { CollectionConfig } from 'payload';

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'safetyDocuments',
      type: 'relationship',
      relationTo: 'safety-documents',
      hasMany: true,
      required: true,
    },
    {
      name: 'hazardLevel',
      type: 'select',
      options: [
        { label: 'Low', value: 'low' },
        { label: 'Medium', value: 'medium' },
        { label: 'High', value: 'high' },
      ],
      required: true,
    },
    {
      name: 'storageRequirements',
      type: 'text',
      required: true,
    },
    {
      name: 'handlingInstructions',
      type: 'richText',
      required: true,
    },
    {
      name: 'inStock',
      type: 'number',
      required: true,
    },
    {
      name: 'minimumOrderQuantity',
      type: 'number',
      required: true,
    },
    {
      name: 'unit',
      type: 'select',
      options: [
        { label: 'Liters', value: 'L' },
        { label: 'Milliliters', value: 'mL' },
        { label: 'Kilograms', value: 'kg' },
        { label: 'Grams', value: 'g' },
      ],
      required: true,
    },
  ],
};