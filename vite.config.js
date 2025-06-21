import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          blogdata: ['./src/blogs.js'] // Separate your blog data
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});