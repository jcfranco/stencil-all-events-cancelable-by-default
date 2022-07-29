import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-starter-project-name',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'docs-json', file: 'docs/docs.json'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
