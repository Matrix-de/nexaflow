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
    include: [
      'react',
      'react-dom',
      'framer-motion',
      '@radix-ui/react-slot',
    ],
  },
  build: {
    // تحسينات الأداء للإنتاج
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    sourcemap: false,
    
    // تقسيم الكود لتحميل أسرع - محافظ على كل المكونات
    rollupOptions: {
      output: {
        manualChunks: {
          // المكتبات الأساسية
          'react-vendor': ['react', 'react-dom'],
          
          // مكتبات الرسوم المتحركة - منفصلة للتحميل عند الحاجة
          'animations': ['framer-motion', 'gsap', 'lenis'],
          
          // مكتبات UI - محافظة على كل المكونات
          'ui-components': [
            '@radix-ui/react-slot', 
            '@radix-ui/react-tooltip',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-select',
            'lucide-react'
          ],
          
          // مكتبات 3D - منفصلة لتحسين الأداء
          'threejs': ['three', '@react-three/fiber', '@react-three/drei'],
          
          // مكتبات البيانات والرسوم البيانية
          'charts': ['recharts', '@number-flow/react'],
          
          // Spline والتأثيرات المتقدمة
          'advanced-effects': [
            '@splinetool/react-spline', 
            '@splinetool/runtime',
            '@tsparticles/react',
            '@tsparticles/slim'
          ],
        },
      },
    },
    
    // رفع حد التحذير لأن لدينا مكتبات كبيرة ضرورية
    chunkSizeWarningLimit: 2000,
    
    // تحسين الصور بدون حذفها
    assetsInlineLimit: 4096,
    
    // إعدادات ضغط محسنة
    terserOptions: {
      compress: {
        drop_console: true, // إزالة console.log في الإنتاج فقط
        drop_debugger: true,
        pure_funcs: ['console.log'], // الحفاظ على console.error و console.warn
      },
    },
  },
  
  // تحسين التطوير
  esbuild: {
    target: 'esnext',
    platform: 'browser',
    format: 'esm',
  },
});
