import React from 'react';
import PageHero from '../components/ui/PageHero/PageHero';
import SectionTitle from '../components/ui/SectionTitle/SectionTitle';
import ServiceCard from '../features/services/ServiceCard/ServiceCard';
import CTABanner from '../features/home/CTABanner/CTABanner';
import { services } from '../data/dummyData';
import './Services.scss';

export const Services = () => {
  return (
    <div className="services-page">
      <PageHero
        badge="Production Capabilities"
        title="Our Entertainment Services"
        subtitle="End-to-end event conceptualization, concert-scale audio engineering, stage architecture, and star celebrity management."
        breadcrumbs={[{ label: 'Our Services' }]}
        backgroundImage="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="services-list-section">
        <div className="services-list-section__container">
          <SectionTitle
            badge="Six Dedicated Verticals"
            title="Engineered for"
            highlight="Impact & Wonder"
            description="Explore our specialized event production verticals, each led by dedicated technical and creative directors."
            align="center"
          />

          <div className="services-list-section__items">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default Services;

