import React, { useRef, useState, useEffect } from 'react';
import { dummyMedia } from '../../../data/dummyData';
import './Hero.scss';

export const Hero = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Enforce muted on DOM level to satisfy strict browser autoplay requirements
    video.defaultMuted = true;
    video.muted = true;

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            setVideoLoaded(true);
          })
          .catch(() => {});
      }
    };

    playVideo();
    video.addEventListener('loadeddata', playVideo);
    video.addEventListener('canplay', playVideo);

    // Fallback: trigger playback on first user interaction anywhere if autoplay was restricted
    const handleFirstInteraction = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('scroll', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      video.removeEventListener('loadeddata', playVideo);
      video.removeEventListener('canplay', playVideo);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  return (
    <section className="hero-section" aria-label="Hero Spotlight">
      {/* Background Video Layer */}
      <div className="hero-section__video-wrapper">
        <video
          ref={videoRef}
          className={`hero-section__video ${videoLoaded ? 'hero-section__video--loaded' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          poster={dummyMedia.heroPoster}
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src={dummyMedia.heroVideo} type="video/mp4" />
          <source src={dummyMedia.heroVideoFallback} type="video/mp4" />
          {dummyMedia.heroVideoCDN && (
            <source src={dummyMedia.heroVideoCDN} type="video/mp4" />
          )}
          Your browser does not support the video tag.
        </video>

        {/* Cinematic Gradient Overlays */}
        <div className="hero-section__overlay-radial" />
        <div className="hero-section__overlay-linear" />
      </div>
    </section>
  );
};

export default Hero;
