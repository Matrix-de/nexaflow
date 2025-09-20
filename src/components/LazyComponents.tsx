import { lazy, Suspense, useState, useEffect } from 'react';

// مكونات Lazy Loading للمكونات الثقيلة
const AI3DAssistantShowcase = lazy(() => import('../components/AI3DAssistantShowcase').then(module => ({ default: module.AI3DAssistantShowcase })));
const AIAutomationSplineDemo = lazy(() => import('../components/AIAutomationSplineDemo'));
const AIAutomationScrollShowcase = lazy(() => import('../components/AIAutomationScrollShowcase'));

// Loading component مخصص
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-slate-950">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-12 h-12 border-4 border-cyan-400 border-b-transparent rounded-full animate-spin animate-reverse"></div>
    </div>
  </div>
);

// HOC للـ lazy loading مع loading state
export const withLazyLoading = (Component: React.ComponentType<any>) => {
  return (props: any) => (
    <Suspense fallback={<LoadingSpinner />}>
      <Component {...props} />
    </Suspense>
  );
};

// Export المكونات مع lazy loading
export const LazyAI3DAssistantShowcase = withLazyLoading(AI3DAssistantShowcase);
export const LazyAIAutomationSplineDemo = withLazyLoading(AIAutomationSplineDemo);
export const LazyAIAutomationScrollShowcase = withLazyLoading(AIAutomationScrollShowcase);

// Hook للتحقق من الدخول إلى viewport
export const useIntersectionObserver = (
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options,
    });

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [ref, options]);

  return isIntersecting;
};