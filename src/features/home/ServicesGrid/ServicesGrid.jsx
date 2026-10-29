import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaMusic,
  FaBriefcase,
  FaGraduationCap,
  FaCompactDisc,
  FaGlassCheers,
  FaStar,
  FaArrowRight
} from 'react-icons/fa';
import { services } from '../../../data/dummyData';
import './ServicesGrid.scss';

const iconMap = {
  FaMusic: <FaMusic />,
  FaBriefcase: <FaBriefcase />,
  FaGraduationCap: <FaGraduationCap />,
  FaCompactDisc: <FaCompactDisc />,
  FaGlassCheers: <FaGlassCheers />,
  FaStar: <FaStar />
};

export const ServicesGrid = () => {
  return (
    <section className="services-showcase" aria-label="Our Core Services">
      <div className="services-showcase__container">
        {/* Section Header */}
        <div className="services-showcase__header">
          <span className="services-showcase__eyebrow">WHAT WE DELIVER</span>
          <h2 className="services-showcase__title">Our Core Services</h2>
          <div className="title-dash">
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* Executive Services Cards Grid */}
        <div className="services-showcase__grid">
          {services.map((srv, idx) => (
            <Link
              key={srv.id}
              to={`/services/${srv.slug}`}
              className="service-axis-card"
            >
              {/* Media Container with Image, Badges and Icon Bubble */}
              <div className="service-axis-card__media">
                <img src={srv.image} alt={srv.title} loading="lazy" />
                <div className="service-axis-card__overlay" />
                <span className="service-axis-card__badge">{srv.badge}</span>
                <div className="service-axis-card__icon-badge">
                  {iconMap[srv.icon] || <FaStar />}
                </div>
              </div>

              {/* Card Content Area */}
              <div className="service-axis-card__body">
                <div className="service-axis-card__meta">
                  <span className="service-axis-card__number">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="service-axis-card__line" />
                </div>

                <h3 className="service-axis-card__title">{srv.title}</h3>
                <p className="service-axis-card__desc">{srv.shortDesc}</p>

                <div className="service-axis-card__footer">
                  <span className="service-axis-card__cta">
                    Explore Service
                    <FaArrowRight className="service-axis-card__arrow" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
