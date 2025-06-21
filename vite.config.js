import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // List problematic dependencies here
        'react',
        'react-dom',
        'react-router-dom',
        // Add other modules causing issues
      ],
    },
  },
});