import React, { useEffect, useState, useRef } from 'react';
import './Loader.scss';

export const Loader = ({ onFinish, duration = 1800 }) => {
  const [isFlying, setIsFlying] = useState(false);
  const [fadingBg, setFadingBg] = useState(false);
  const [flyStyle, setFlyStyle] = useState({});
  const logoRef = useRef(null);

  useEffect(() => {
    // Hide the navbar logo while loader is active to ensure a seamless handoff
    document.body.classList.add('loader-active');

    // Trigger flight and background reveal
    const flyDuration = 750;
    const flyStartTime = Math.max(800, duration - flyDuration);

    const flyTimeout = setTimeout(() => {
      const targetEl = document.querySelector('.site-header__logo');
      const currentEl = logoRef.current;

      if (targetEl && currentEl) {
        const targetRect = targetEl.getBoundingClientRect();
        const currentRect = currentEl.getBoundingClientRect();

        const dX = targetRect.left - currentRect.left;
        const dY = targetRect.top - currentRect.top;
        const scale = targetRect.height / currentRect.height;

        setFlyStyle({
          transform: `translate3d(${dX}px, ${dY}px, 0) scale(${scale})`,
          transformOrigin: 'top left'
        });
      }

      setIsFlying(true);
      setFadingBg(true);
    }, flyStartTime);

    // Complete transition and unmount loader
    const finishTimeout = setTimeout(() => {
      document.body.classList.remove('loader-active');
      if (onFinish) onFinish();
    }, duration);

    return () => {
      document.body.classList.remove('loader-active');
      clearTimeout(flyTimeout);
      clearTimeout(finishTimeout);
    };
  }, [duration, onFinish]);

  return (
    <div
      className={`app-loader ${fadingBg ? 'app-loader--bg-fading' : ''}`}
      aria-hidden="true"
    >
      <div className="app-loader__center">
        {/* Animated Brand Logo Lockup */}
        <div
          ref={logoRef}
          className={`app-loader__logo ${isFlying ? 'app-loader__logo--flying' : ''}`}
          style={flyStyle}
        >
          <div className="app-loader__logo-icon">
            <span>L</span>
          </div>
          <div className="app-loader__logo-text">
            <span className="app-loader__logo-main">LUMINA</span>
            <span className="app-loader__logo-sub">ENTERTAINMENTS</span>
          </div>
        </div>

        {/* Hairline Progress Indicator (Fades out when flight starts) */}
        <div className={`app-loader__track ${isFlying ? 'app-loader__track--hidden' : ''}`}>
          <div className="app-loader__bar" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
