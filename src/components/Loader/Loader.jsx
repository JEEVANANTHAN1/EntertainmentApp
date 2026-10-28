import React, { useEffect, useState, useRef } from 'react';
import './Loader.scss';

export const Loader = ({ onFinish, duration = 1850 }) => {
  const [isFlying, setIsFlying] = useState(false);
  const [fadingBg, setFadingBg] = useState(false);
  const [flyTransform, setFlyTransform] = useState('');
  const logoRef = useRef(null);

  useEffect(() => {
    // Hide navbar logo during loader to ensure clean transition handoff
    document.body.classList.add('loader-active');

    const flyStartTime = 1000;
    const flyDuration = 700;

    const flyTimeout = setTimeout(() => {
      const targetEl = document.querySelector('.site-header__logo');
      const currentEl = logoRef.current;

      if (targetEl && currentEl) {
        const targetRect = targetEl.getBoundingClientRect();
        const currentRect = currentEl.getBoundingClientRect();

        const dX = targetRect.left - currentRect.left;
        const dY = targetRect.top - currentRect.top;
        const scale = targetRect.height / currentRect.height;

        setFlyTransform(`translate3d(${dX}px, ${dY}px, 0) scale(${scale})`);
      }

      setIsFlying(true);
      setFadingBg(true);
      document.body.classList.add('loader-revealing');
    }, flyStartTime);

    // Clean finish with buffer to let easing completely settle
    const finishTimeout = setTimeout(() => {
      document.body.classList.remove('loader-active');
      document.body.classList.remove('loader-revealing');
      if (onFinish) onFinish();
    }, flyStartTime + flyDuration + 100);

    return () => {
      document.body.classList.remove('loader-active');
      document.body.classList.remove('loader-revealing');
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
          style={flyTransform ? { transform: flyTransform } : undefined}
        >
          <div className="app-loader__logo-icon">
            <span>L</span>
          </div>
          <div className="app-loader__logo-text">
            <span className="app-loader__logo-main">LUMINA</span>
            <span className="app-loader__logo-sub">ENTERTAINMENTS</span>
          </div>
        </div>

        {/* Hairline Progress Indicator */}
        <div className={`app-loader__track ${isFlying ? 'app-loader__track--hidden' : ''}`}>
          <div className="app-loader__bar" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
