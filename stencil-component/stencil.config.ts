import { Config } from '@stencil/core';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';

export const config: Config = {
  namespace: 'salla-asnmt-app',

  // Global styles including Tailwind directives and custom CSS variables
  globalStyle: 'src/global/app.css',

  plugins: [
    tailwind(), // TailwindCSS support
    tailwindHMR(), // Hot Module Replacement for dev (great for Tailwind)
  ],

  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader', // Enables loader generation for framework integration
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements', // Ensures auto-definition in consuming apps
      externalRuntime: false, // Include runtime internally (safe default)
    },
    {
      type: 'docs-readme', // Generates README documentation for each component
    },
    {
      type: 'www',
      serviceWorker: null, // Disable service worker for dev/testing apps
    },
  ],

  // Use Puppeteer shell browser instead of Chromium for CI-friendliness
  testing: {
    browserHeadless: 'shell',
  },
};
