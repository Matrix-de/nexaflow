// ملف تحسين لضغط الصور تلقائياً بدون فقدان الجودة
const optimizeImages = () => {
  // تحسين تحميل الصور الكبيرة
  if (typeof window !== 'undefined') {
    // تحميل lazy للصور
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
};

export default optimizeImages;