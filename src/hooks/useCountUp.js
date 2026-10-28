import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to animate numbers counting up when an element enters the viewport
 * @param {number} target - Final number to reach
 * @param {number} duration - Animation duration in milliseconds
 * @returns {object} { count, elementRef, isVisible }
 */
export const useCountUp = (target = 100, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      setCount(target);
      return;
    }

    const startAnimation = () => {
      setHasAnimated(true);
      const startTime = performance.now();
      const startValue = 0;

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-out cubic formula for organic deceleration
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(startValue + (target - startValue) * easeOutProgress);
        
        setCount(currentVal);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if ((entry.isIntersecting || entry.intersectionRatio > 0) && !hasAnimated) {
          startAnimation();
        }
      },
      { threshold: 0.05, rootMargin: '100px 0px' }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [target, duration, hasAnimated]);

  return { count, elementRef, hasAnimated };
};

