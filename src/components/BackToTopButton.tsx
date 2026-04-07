import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const footerEl = document.getElementById('site-footer');
    if (!footerEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsNearFooter(entries[0]?.isIntersecting ?? false);
      },
      { threshold: 0.1 },
    );

    observer.observe(footerEl);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed right-4 bottom-[calc(10rem+env(safe-area-inset-bottom))] sm:right-6 md:bottom-24 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full gradient-navy text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
        isVisible && !isNearFooter ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
  );
};

export default BackToTopButton;
