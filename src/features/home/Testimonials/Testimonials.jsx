import React, { useState, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '../../../data/dummyData';
import './Testimonials.scss';

export const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // Responsive cards per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / cardsPerPage);
  const currentPage = Math.floor(startIndex / cardsPerPage);

  const handlePrev = () => {
    setStartIndex((prev) => {
      const nextIndex = prev - cardsPerPage;
      return nextIndex < 0 ? Math.max(0, testimonials.length - cardsPerPage) : nextIndex;
    });
  };

  const handleNext = () => {
    setStartIndex((prev) => {
      const nextIndex = prev + cardsPerPage;
      return nextIndex >= testimonials.length ? 0 : nextIndex;
    });
  };

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section className="testimonials-section-home" aria-label="Client Testimonials">
      <div className="testimonials-section-home__container">
        {/* Section Header */}
        <div className="testimonials-section-home__header">
          <span className="testimonials-section-home__sub-title">Testimonials</span>
          <h2 className="testimonials-section-home__title">
            No Joking - Here is the Proof!<br />
            What our Client say
          </h2>
          <div className="title-dash">
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* Carousel / Grid of Testimonials */}
        <div className="testimonials-section-home__cards">
          {visibleTestimonials.map((item, idx) => {
            // Alternate card styling: even cards white, odd cards deep royal navy (matching original site)
            const isDark = (startIndex + idx) % 2 === 1;

            return (
              <div
                key={item.id}
                className={`testimonials-item-card ${isDark ? 'testimonials-item-card--dark' : 'testimonials-item-card--light'}`}
              >
                {/* 5 Rating Stars */}
                <div className="testimonials-item-card__stars">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="testimonials-item-card__quote">
                  "{item.text}"
                </blockquote>

                {/* Client Name */}
                <div className="testimonials-item-card__caption">
                  <h3 className="testimonials-item-card__name">{item.name}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="testimonials-section-home__controls">
          <button
            className="testimonials-section-home__nav-btn"
            onClick={handlePrev}
            aria-label="Previous testimonials"
          >
            <FaChevronLeft />
          </button>

          <div className="testimonials-section-home__dots">
            {[...Array(totalPages)].map((_, pageIdx) => (
              <button
                key={pageIdx}
                className={`testimonials-section-home__dot ${
                  pageIdx === currentPage ? 'testimonials-section-home__dot--active' : ''
                }`}
                onClick={() => setStartIndex(pageIdx * cardsPerPage)}
                aria-label={`Go to slide page ${pageIdx + 1}`}
              />
            ))}
          </div>

          <button
            className="testimonials-section-home__nav-btn"
            onClick={handleNext}
            aria-label="Next testimonials"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
