import React from 'react';
import Hero from '../features/home/Hero/Hero';
import AboutPreview from '../features/home/AboutPreview/AboutPreview';
import StatsCounter from '../features/home/StatsCounter/StatsCounter';
import ServicesGrid from '../features/home/ServicesGrid/ServicesGrid';
import CTABanner from '../features/home/CTABanner/CTABanner';
import GalleryPreview from '../features/home/GalleryPreview/GalleryPreview';
import Testimonials from '../features/home/Testimonials/Testimonials';
import TeamSection from '../features/home/TeamSection/TeamSection';

export const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <AboutPreview />
      <StatsCounter />
      <ServicesGrid />
      <CTABanner />
      <GalleryPreview />
      <Testimonials />
      <TeamSection />
    </div>
  );
};

export default Home;
