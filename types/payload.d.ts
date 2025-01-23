declare module 'payload/config' {
  export interface Config {
    serverURL: string;
    admin: {
      user: string;
      bundler: any;
    };
    editor: any;
    collections: any[];
    typescript: {
      outputFile: string;
    };
    db: any;
    cors: string[];
  }

  export function buildConfig(config: Config): any;
}

declare module '@payloadcms/db-mongodb' {
  export function mongooseAdapter(config: { url: string }): any;
}

declare module '@payloadcms/bundler-webpack' {
  export function webpackBundler(): any;
}

declare module '@payloadcms/richtext-slate' {
  export function slateEditor(config: any): any;
} 