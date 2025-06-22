import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import sitemap from 'vite-plugin-sitemap';


export default defineConfig({
  plugins: [
    react(),
    visualizer(),
    sitemap({
      hostname: 'https://www.hamroexam.com',
      routes: [
        '/',
        '/about',
        '/contact',
        '/privacy-policy',
        '/terms',
        '/blog',
        '/practice-guides',
        '/medical',
        '/csit',
        '/bit',
        '/bca',
        '/ioe',
        '/pioe',
        'Pcsit',
        '/PBit',
        '/Pmedical',
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
