import React, { useEffect } from 'react';
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaTag
} from 'react-icons/fa';
import './Lightbox.scss';

export const Lightbox = ({
  isOpen,
  onClose,
  items = [],
  currentIndex = 0,
  onPrev,
  onNext
}) => {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items.length) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="lightbox-modal" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="lightbox-modal__backdrop" onClick={onClose} />

      {/* Top Controls Bar */}
      <div className="lightbox-modal__top-bar">
        <div className="lightbox-modal__counter">
          <span>{currentIndex + 1}</span> / <span>{items.length}</span>
        </div>

        <button
          className="lightbox-modal__close-btn"
          onClick={onClose}
          aria-label="Close Lightbox"
        >
          <FaTimes />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        className="lightbox-modal__nav-btn lightbox-modal__nav-btn--prev"
        onClick={onPrev}
        aria-label="Previous item"
      >
        <FaChevronLeft />
      </button>

      <button
        className="lightbox-modal__nav-btn lightbox-modal__nav-btn--next"
        onClick={onNext}
        aria-label="Next item"
      >
        <FaChevronRight />
      </button>

      {/* Center Media Display */}
      <div className="lightbox-modal__content">
        <div className="lightbox-modal__media-container">
          {currentItem.isVideo ? (
            <video
              className="lightbox-modal__video"
              controls
              autoPlay
              playsInline
              webkit-playsinline="true"
              preload="auto"
              src={currentItem.videoUrl}
            >
              <source src={currentItem.videoUrl} type="video/mp4" />
              <source src="/videos/hero-loop.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="lightbox-modal__image"
            />
          )}
        </div>

        {/* Caption & Metadata */}
        <div className="lightbox-modal__details">
          <div className="lightbox-modal__tags">
            <span className="lightbox-modal__category">{currentItem.category}</span>
            {currentItem.tags &&
              currentItem.tags.map((t, idx) => (
                <span key={idx} className="lightbox-modal__tag">
                  <FaTag /> {t}
                </span>
              ))}
          </div>

          <h3 className="lightbox-modal__title">{currentItem.title}</h3>
          <p className="lightbox-modal__subtitle">{currentItem.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;

