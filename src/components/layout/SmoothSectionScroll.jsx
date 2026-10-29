import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SmoothSectionScroll
 * Enables smooth section-to-section navigation on fast swipes (touch & trackpad flicks),
 * while preserving natural continuous reading for gentle scrolling gestures.
 */
export const SmoothSectionScroll = () => {
  const { pathname } = useLocation();
  const touchStartRef = useRef({ x: 0, y: 0, time: 0 });
  const isAnimatingRef = useRef(false);
  const lastWheelTimeRef = useRef(0);

  useEffect(() => {
    isAnimatingRef.current = false;

    // Standard navbar clearance height
    const NAVBAR_HEIGHT = 74;

    // Helper: collect valid top-level sections
    const getSections = () => {
      const elements = Array.from(
        document.querySelectorAll('main section, footer.mediafox-footer')
      ).filter((el) => {
        if (!el || el.offsetParent === null) return false;
        const rect = el.getBoundingClientRect();
        return (
          rect.height > 60 &&
          !el.closest('.ui-modal') &&
          !el.closest('.site-header__quick-drawer') &&
          !el.closest('.site-header__mobile-drawer') &&
          !el.closest('.lightbox-backdrop')
        );
      });
      return elements;
    };

    // Helper: find target section in given direction ('down' = next, 'up' = previous)
    const getTargetSection = (direction) => {
      const sections = getSections();
      if (sections.length === 0) return null;

      const currentScrollY = window.scrollY;

      if (direction === 'down') {
        // Find first section whose top sits noticeably below current position
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const sectionTop = Math.max(
            0,
            section.getBoundingClientRect().top + currentScrollY - NAVBAR_HEIGHT
          );
          if (sectionTop > currentScrollY + 45) {
            return { section, top: sectionTop };
          }
        }
      } else if (direction === 'up') {
        // Find first section above current position (searching backwards)
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          const sectionTop =
            i === 0
              ? 0
              : Math.max(
                  0,
                  section.getBoundingClientRect().top + currentScrollY - NAVBAR_HEIGHT
                );
          if (sectionTop < currentScrollY - 45) {
            return { section, top: sectionTop };
          }
        }
        // Fallback to top of page (hero)
        return { section: sections[0], top: 0 };
      }

      return null;
    };

    // Helper: execute smooth scroll with animation lock
    const scrollToTarget = (targetTop) => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      window.scrollTo({
        top: Math.round(targetTop),
        behavior: 'smooth'
      });

      // Release lock after smooth scroll animation completes
      setTimeout(() => {
        isAnimatingRef.current = false;
      }, 650);
    };

    // --- TOUCH HANDLERS (Mobile / Tablet Swipe) ---
    const handleTouchStart = (e) => {
      if (e.touches.length !== 1) return;
      const touch = e.touches[0];
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now()
      };
    };

    const handleTouchEnd = (e) => {
      if (isAnimatingRef.current) return;

      // Do not intercept if user was interacting with form controls
      const activeEl = document.activeElement;
      if (
        activeEl &&
        (activeEl.tagName === 'INPUT' ||
          activeEl.tagName === 'TEXTAREA' ||
          activeEl.tagName === 'SELECT')
      ) {
        return;
      }

      // Do not intercept if touch was inside interactive overlays
      if (
        e.target.closest(
          '.ui-modal, .site-header__quick-drawer, .site-header__mobile-drawer, .lightbox-backdrop'
        )
      ) {
        return;
      }

      const touch = e.changedTouches[0];
      if (!touch) return;

      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touchStartRef.current.y - touch.clientY; // positive = swipe up (scroll down)
      const deltaTime = Date.now() - touchStartRef.current.time;

      if (deltaTime <= 0) return;
      const velocity = Math.abs(deltaY) / deltaTime; // px/ms

      // Fast swipe criteria:
      // Quick gesture (<350ms), significant travel (>50px), vertical orientation, velocity > 0.45 px/ms
      const isFastSwipe =
        deltaTime < 350 &&
        Math.abs(deltaY) > 50 &&
        Math.abs(deltaY) > Math.abs(deltaX) * 1.4 &&
        velocity > 0.45;

      if (isFastSwipe) {
        const direction = deltaY > 0 ? 'down' : 'up';
        const target = getTargetSection(direction);
        if (target) {
          scrollToTarget(target.top);
        }
      }
    };

    // --- WHEEL / TRACKPAD HANDLER (Fast Flick on Desktop) ---
    const handleWheel = (e) => {
      if (isAnimatingRef.current) return;

      if (
        e.target.closest(
          '.ui-modal, .site-header__quick-drawer, .site-header__mobile-drawer, .lightbox-backdrop'
        )
      ) {
        return;
      }

      const now = Date.now();
      const deltaY = e.deltaY;

      // Fast wheel flick (> 95px in a single wheel burst) with 700ms cooldown
      if (Math.abs(deltaY) > 95 && now - lastWheelTimeRef.current > 700) {
        const direction = deltaY > 0 ? 'down' : 'up';
        const target = getTargetSection(direction);
        if (target) {
          lastWheelTimeRef.current = now;
          scrollToTarget(target.top);
        }
      }
    };

    // Register passive listeners for optimal 60fps scrolling performance
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [pathname]);

  return null;
};

export default SmoothSectionScroll;

