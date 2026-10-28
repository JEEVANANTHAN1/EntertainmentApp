import { useState, useEffect } from 'react';

/**
 * Hook to track window scroll position and state
 * @param {number} threshold - Scroll distance in px to toggle scrolled state
 * @returns {object} { scrollY, isScrolled, scrollDirection }
 */
export const useScrollPosition = (threshold = 60) => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('none');

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > threshold);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { scrollY, isScrolled, scrollDirection };
};

