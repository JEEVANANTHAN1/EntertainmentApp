import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { galleryItems } from '../../../data/dummyData';
import Button from '../../../components/ui/Button/Button';
import './GalleryPreview.scss';

export const GalleryPreview = () => {
  // 8 photos matching the 8 rotating images of original site
  const previewItems = galleryItems.slice(0, 8);

  return (
    <section className="gallery-section-home" aria-label="Visual Gallery">
      <div className="gallery-section-home__container">
        {/* Title */}
        <div className="gallery-section-home__header">
          <h2 className="gallery-section-home__title">Gallery</h2>
          <div className="title-dash">
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* Dynamic Carousel / Grid */}
        <div className="gallery-section-home__grid">
          {previewItems.map((item) => (
            <Link
              key={item.id}
              to="/gallery"
              className="gallery-section-home__item"
              title={`View ${item.title}`}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-section-home__item-overlay">
                <span className="gallery-section-home__item-title">{item.title}</span>
                <span className="gallery-section-home__item-cat">{item.category}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="gallery-section-home__action">
          <Button
            to="/gallery"
            variant="secondary"
            size="lg"
            icon={<FaArrowRight />}
            style={{ background: '#081735', color: '#FFFFFF', border: 'none' }}
          >
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
