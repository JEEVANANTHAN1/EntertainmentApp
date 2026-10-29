import React, { useEffect, useState, useRef } from 'react';
import BrandPrismMark from '../ui/BrandPrismMark/BrandPrismMark';
import './Loader.scss';

export const Loader = ({ onFinish }) => {
  const [isFlying, setIsFlying] = useState(false);
  const [fadingBg, setFadingBg] = useState(false);
  const [flyTransform, setFlyTransform] = useState('');
  const logoRef = useRef(null);

  useEffect(() => {
    // Keep navbar logo hidden during flight to guarantee smooth seamless handoff
    document.body.classList.add('loader-active');

    const flyStartTime = 950;
    const flyDuration = 1400; // 1.4s smooth, majestic, luxury glide

    const flyTimeout = setTimeout(() => {
      const targetEl = document.querySelector('.site-header__nav-inner .site-header__logo');
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
    }, flyStartTime + flyDuration + 150);

    return () => {
      document.body.classList.remove('loader-active');
      document.body.classList.remove('loader-revealing');
      clearTimeout(flyTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onFinish]);

  return (
    <div className="app-loader" aria-hidden="true">
      {/* Independent white veil that fades out smoothly to reveal underlying page */}
      <div className={`app-loader__backdrop ${fadingBg ? 'app-loader__backdrop--fading' : ''}`} />

      <div className="app-loader__stage">
        {/* Animated Brand Logo Lockup */}
        <div
          ref={logoRef}
          className={`app-loader__logo ${isFlying ? 'app-loader__logo--flying' : ''}`}
          style={flyTransform ? { transform: flyTransform } : undefined}
        >
          <div className="app-loader__logo-icon">
            <BrandPrismMark size={52} />
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
