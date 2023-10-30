import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '/@json': path.resolve(__dirname, 'src/json'),
    },
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
});
