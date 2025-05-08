import path from 'node:path';
import react from '@vitejs/plugin-react';
import { createLogger, defineConfig } from 'vite';

const configHorizonsViteErrorHandler = `
// ... (inchangé)
`;
const configHorizonsRuntimeErrorHandler = `
// ... (inchangé)
`;
const configHorizonsConsoleErrroHandler = `
// ... (inchangé)
`;
const configWindowFetchMonkeyPatch = `
// ... (inchangé)
`;

const addTransformIndexHtml = {
  name: 'add-transform-index-html',
  transformIndexHtml(html) {
    return {
      html,
      tags: [
        {
          tag: 'script',
          attrs: { type: 'module' },
          children: configHorizonsRuntimeErrorHandler,
          injectTo: 'head',
        },
        {
          tag: 'script',
          attrs: { type: 'module' },
          children: configHorizonsViteErrorHandler,
          injectTo: 'head',
        },
        {
          tag: 'script',
          attrs: { type: 'module' },
          children: configHorizonsConsoleErrroHandler,
          injectTo: 'head',
        },
        {
          tag: 'script',
          attrs: { type: 'module' },
          children: configWindowFetchMonkeyPatch,
          injectTo: 'head',
        },
      ],
    };
  },
};

console.warn = () => {};

const logger = createLogger();
const loggerError = logger.error;

logger.error = (msg, options) => {
  if (options?.error?.toString().includes('CssSyntaxError: [postcss]')) {
    return;
  }
  loggerError(msg, options);
};

export default defineConfig({
  customLogger: logger,
  base: '/afwall-site/', // 👈 obligatoire pour GitHub Pages
  plugins: [react(), addTransformIndexHtml],
  server: {
    cors: true,
    headers: {
      'Cross-Origin-Embedder-Policy': 'credentialless',
    },
    allowedHosts: true,
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
