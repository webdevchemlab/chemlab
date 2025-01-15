import { CollectionConfig } from 'payload/types';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Customer', value: 'customer' },
      ],
    },
    {
      name: 'company',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'registrationNumber',
          type: 'text',
          required: true,
        },
        {
          name: 'type',
          type: 'select',
          options: [
            { label: 'Laboratory', value: 'laboratory' },
            { label: 'Manufacturing', value: 'manufacturing' },
            { label: 'Research Institution', value: 'research' },
            { label: 'Educational Institution', value: 'education' },
            { label: 'Other', value: 'other' },
          ],
          required: true,
        },
      ],
    },
    {
      name: 'verificationDocuments',
      type: 'array',
      fields: [
        {
          name: 'document',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'type',
          type: 'select',
          options: [
            { label: 'Business License', value: 'business-license' },
            { label: 'Chemical Handling Permit', value: 'chemical-permit' },
            { label: 'Safety Certification', value: 'safety-cert' },
          ],
          required: true,
        },
      ],
    },
    {
      name: 'shippingAddresses',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'street',
          type: 'text',
          required: true,
        },
        {
          name: 'city',
          type: 'text',
          required: true,
        },
        {
          name: 'state',
          type: 'text',
          required: true,
        },
        {
          name: 'zipCode',
          type: 'text',
          required: true,
        },
        {
          name: 'country',
          type: 'text',
          required: true,
        },
        {
          name: 'isDefault',
          type: 'checkbox',
        },
      ],
    },
  ],
};