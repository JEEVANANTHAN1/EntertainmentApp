import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../../../components/ui/Button/Button';
import './CTABanner.scss';

export const CTABanner = () => {
  return (
    <section className="memorable-cta-section" aria-label="Best Event Management Company">
      <div className="memorable-cta-section__container">
        <div className="memorable-cta-section__box">
          <div className="memorable-cta-section__text">
            <h2 className="memorable-cta-section__heading">Best Event Management Company</h2>
            <p className="memorable-cta-section__desc">
              Experience unmatched event management with Lumina. With 8+ years of experience, and a proven track record of success, we guarantee memorable and flawless events every time.
            </p>
          </div>

          <div className="memorable-cta-section__action-col">
            <h3 className="memorable-cta-section__subhead">Make your Event Memorable!</h3>
            <Button to="/enquiry" variant="primary" size="lg" icon={<FaArrowRight />} style={{ background: '#F37021', color: '#FFFFFF', border: 'none' }}>
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
