import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    host: '::',
  },
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
