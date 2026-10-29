import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../../../components/ui/Button/Button';
import './AboutPreview.scss';

export const AboutPreview = () => {
  return (
    <section className="about-preview" aria-label="About Lumina Entertainments">
      <div className="about-preview__container">
        {/* Left Side: Stage Concert Visual */}
        <div className="about-preview__visual">
          <div className="about-preview__frame">
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80"
              alt="Lumina Stage Production"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Side: Welcome Narrative */}
        <div className="about-preview__content">
          <span className="about-preview__subtitle">WELCOME TO LUMINA ENTERTAINMENTS</span>
          <h2 className="about-preview__title">Create Extraordinary Event Memories</h2>
          
          {/* Media Fox signature color dashes */}
          <div className="title-dash title-dash--left">
            <span />
            <span />
            <span />
          </div>

          <p className="about-preview__desc">
            Lumina is Coimbatore's premier event management company, igniting occasions with creativity and precision. With years of experience and a network of celebrities, we craft unforgettable concerts, corporate events, DJ nights, and more. Let us transform your moments into magical memories.
          </p>

          <div className="about-preview__action">
            <Button to="/enquiry" variant="primary" size="lg" icon={<FaArrowRight />}>
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
