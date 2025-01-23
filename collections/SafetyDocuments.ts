import type { CollectionConfig } from 'payload';

export const SafetyDocuments: CollectionConfig = {
  slug: 'safety-documents',
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
      name: 'type',
      type: 'select',
      options: [
        { label: 'SDS', value: 'sds' },
        { label: 'Technical Data Sheet', value: 'tds' },
        { label: 'Safety Guide', value: 'safety-guide' },
        { label: 'Handling Instructions', value: 'handling' },
      ],
      required: true,
    },
    {
      name: 'document',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'version',
      type: 'text',
      required: true,
    },
    {
      name: 'lastUpdated',
      type: 'date',
      required: true,
    },
  ],
};