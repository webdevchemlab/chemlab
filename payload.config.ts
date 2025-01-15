import { buildConfig } from 'payload/config';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import path from 'path';

import { Categories } from './collections/Categories';
import { Products } from './collections/Products';
import { Orders } from './collections/Orders';
import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { SafetyDocuments } from './collections/SafetyDocuments';

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  admin: {
    user: 'users',
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Categories, Products, Orders, Users, Media, SafetyDocuments],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI!,
  }),
  cors: ['http://localhost:3000'],
});