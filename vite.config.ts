/// <reference types="vitest" />
import { sentryVitePlugin } from '@sentry/vite-plugin';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/setupTests.ts'],
    },

    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            emotion: ['@emotion/react'],
            state: ['@tanstack/react-query', 'zustand'],
            form: ['react-hook-form'],
            mui: ['@mui/material'],
            sentry: ['@sentry/react'],
          },
        },
      },
    },

    plugins: [
      react({
        jsxImportSource: '@emotion/react',
      }),
      sentryVitePlugin({
        org: env.SENTRY_ORG,
        project: env.SENTRY_PROJECT,
        authToken: env.SENTRY_AUTH_TOKEN,
        sourcemaps: {
          filesToDeleteAfterUpload: ['**/*.js.map'],
        },
        bundleSizeOptimizations: {
          excludePerformanceMonitoring: true,
          excludeDebugStatements: true,
          excludeReplayIframe: true,
          excludeReplayShadowDom: true,
          excludeReplayWorker: true,
        },
      }),
    ],
  };
});
