import React, { useState } from 'react';
import {
  FaPlay,
  FaSearchPlus,
  FaFilm,
  FaMusic,
  FaBriefcase,
  FaGlassCheers,
  FaStar,
  FaFilter
} from 'react-icons/fa';
import { galleryItems, dummyMedia } from '../../../data/dummyData';
import Lightbox from '../Lightbox/Lightbox';
import './GalleryGrid.scss';

export const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Augment galleryItems with sample video items to guarantee video showcase
  const allMediaItems = [
    ...galleryItems,
    {
      id: 'v1',
      title: 'Stadium Concert Soundcheck & Live Tour',
      subtitle: 'Concert-grade line array production & pyrotechnics showreel',
      category: 'Concerts',
      isVideo: true,
      videoUrl: dummyMedia.heroVideo,
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80',
      tags: ['Showreel', 'Live Audio', 'Pyro']
    },
    {
      id: 'v2',
      title: 'Electro Bass Festival Aftermovie',
      subtitle: 'Laser sync & interactive LED dancefloor production',
      category: 'DJ Nights',
      isVideo: true,
      videoUrl: dummyMedia.heroVideoFallback,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
      tags: ['Aftermovie', 'CO2 Jets', 'Nightlife']
    }
  ];

  const categories = [
    { label: 'All Productions', value: 'All' },
    { label: 'Mega Concerts', value: 'Concerts' },
    { label: 'Corporate Galas', value: 'Corporate' },
    { label: 'DJ Nights', value: 'DJ Nights' },
    { label: 'Special Occasions', value: 'Special Occasions' },
    { label: 'Celebrity Connects', value: 'Celebrity Connects' },
    { label: 'Video Showreels', value: 'Videos' }
  ];

  const filteredItems = allMediaItems.filter((item) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Videos') return item.isVideo;
    return item.category === activeCategory;
  });

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
  };

  return (
    <div className="gallery-section-component">
      {/* Category Filter Pills */}
      <div className="gallery-section-component__filters" role="tablist">
        {categories.map((cat) => (
          <button
            key={cat.value}
            role="tab"
            aria-selected={activeCategory === cat.value}
            className={`gallery-filter-pill ${
              activeCategory === cat.value ? 'gallery-filter-pill--active' : ''
            }`}
            onClick={() => setActiveCategory(cat.value)}
          >
            {cat.value === 'Videos' && <FaFilm className="gallery-filter-pill__icon" />}
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Grid of Photo & Video cards */}
      <div className="gallery-section-component__grid">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            className={`gallery-item-card ${item.isVideo ? 'gallery-item-card--video' : ''}`}
            onClick={() => openLightbox(idx)}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.title}`}
          >
            <div className="gallery-item-card__media">
              <img src={item.image} alt={item.title} loading="lazy" />

              <div className="gallery-item-card__overlay">
                <div className="gallery-item-card__icon-badge">
                  {item.isVideo ? <FaPlay /> : <FaSearchPlus />}
                </div>

                <div className="gallery-item-card__content">
                  <span className="gallery-item-card__category">
                    {item.isVideo ? 'Video Showreel' : item.category}
                  </span>
                  <h3 className="gallery-item-card__title">{item.title}</h3>
                  <p className="gallery-item-card__sub">{item.subtitle}</p>
                </div>
              </div>

              {item.isVideo && (
                <div className="gallery-item-card__video-indicator">
                  <FaPlay /> Video
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Component */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={filteredItems}
        currentIndex={selectedIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

export default GalleryGrid;

