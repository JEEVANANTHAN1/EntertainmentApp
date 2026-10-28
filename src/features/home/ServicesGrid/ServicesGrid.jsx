import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../../data/dummyData';
import './ServicesGrid.scss';

export const ServicesGrid = () => {
  return (
    <section className="services-showcase" aria-label="Our Core Services">
      <div className="services-showcase__container">
        {/* Section Header */}
        <div className="services-showcase__header">
          <h2 className="services-showcase__title">Our Services</h2>
          <div className="title-dash">
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* 6 Framed Services Cards */}
        <div className="services-showcase__grid">
          {services.map((srv) => (
            <Link key={srv.id} to={`/services/${srv.slug}`} className="service-framed-card">
              <div className="service-framed-card__outer-frame">
                <div className="service-framed-card__inner-frame">
                  <img src={srv.image} alt={srv.title} loading="lazy" />
                </div>
              </div>
              <h3 className="service-framed-card__title">{srv.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
