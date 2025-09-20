export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // تحسين CSS بدون تغيير التصميم
    ...(process.env.NODE_ENV === 'production' && {
      cssnano: {
        preset: ['default', {
          // الحفاظ على جميع الخصائص المهمة
          discardComments: { removeAll: false },
          minifySelectors: false,
          reduceIdents: false,
          mergeIdents: false,
          // تحسين الحجم فقط
          normalizeWhitespace: true,
          colormin: true,
          minifyFontValues: true,
        }]
      }
    })
  },
};
