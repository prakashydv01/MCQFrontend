import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import sitemap from 'vite-plugin-sitemap';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  plugins: [
    react(),
    visualizer(),
    tailwindcss(),
    sitemap({
      hostname: 'https://www.hamroexam.com',
      routes: [
        '/',
        '/about',
        '/contact',
        '/privacy-policy',
        '/terms',
        '/blog',
        '/guidance',
        '/medical',
        '/mock-test/csit',
        '/mock-test/bit',
        '/mock-test/ioe',
        '/practice/ioe',
        '/practice/csit',
        '/practice/bit',
        '/loksewa/computer-operator',
        '/login',
        '/signup'
      ]
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0];
          }
        }
      }
    }
  }
});
