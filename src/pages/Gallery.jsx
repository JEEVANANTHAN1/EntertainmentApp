import React from 'react';
import PageHero from '../components/ui/PageHero/PageHero';
import SectionTitle from '../components/ui/SectionTitle/SectionTitle';
import GalleryGrid from '../features/gallery/GalleryGrid/GalleryGrid';
import CTABanner from '../features/home/CTABanner/CTABanner';
import './Gallery.scss';

export const Gallery = () => {
  return (
    <div className="gallery-page">
      <PageHero
        badge="Visual Archive"
        title="Production & Event Gallery"
        subtitle="Explore our visual journey spanning live mega concerts, corporate inaugurations, electrifying DJ sets, and celebrity moments."
        breadcrumbs={[{ label: 'Gallery' }]}
        backgroundImage="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="gallery-content-section">
        <div className="gallery-content-section__container">
          <SectionTitle
            badge="Captured Brilliance"
            title="Moments That"
            highlight="Echo Forever"
            description="Filter by event category or explore our cinematic video showreels. Click any tile to launch the high-resolution lightbox."
            align="center"
          />

          {/* Full Interactive Grid with Lightbox and Video support */}
          <GalleryGrid />
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default Gallery;

