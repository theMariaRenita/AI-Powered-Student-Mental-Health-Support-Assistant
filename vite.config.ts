import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/AI-Powered-Student-Mental-Health-Support-Assistant/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
