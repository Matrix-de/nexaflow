import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/webhook': {
        target: 'https://n8n.srv962505.hstgr.cloud',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/webhook/, '/webhook'),
        secure: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // تحسينات الأداء للإنتاج
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    sourcemap: false,
    
    // تقسيم الكود لتحميل أسرع
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion', 'gsap'],
          ui: ['@radix-ui/react-slot', '@radix-ui/react-tooltip'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
        },
      },
    },
    
    // ضغط الملفات
    chunkSizeWarningLimit: 1000,
    
    // تحسين الصور
    assetsInlineLimit: 4096,
  },
  
  // تحسين التطوير
  esbuild: {
    target: 'esnext',
    platform: 'browser',
    format: 'esm',
  },
});
