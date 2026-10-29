import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaCheckCircle,
  FaWhatsapp,
  FaArrowRight,
  FaShieldAlt,
  FaStar,
  FaChevronRight
} from 'react-icons/fa';

import PageHero from '../components/ui/PageHero/PageHero';
import Button from '../components/ui/Button/Button';
import { services, companyInfo } from '../data/dummyData';
import './ServiceDetail.scss';

export const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(
    (s) => s.slug === slug || s.id === slug || s.slug.startsWith(slug) || slug.startsWith(s.id)
  );

  if (!service) {
    return (
      <div className="service-detail-not-found">
        <div className="service-detail-not-found__box">
          <h2>Service Not Found</h2>
          <p>The event vertical you are looking for does not exist or has been relocated.</p>
          <Button to="/services" variant="primary">
            Back to All Services
          </Button>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <div className="service-detail-page">
      <PageHero
        badge={service.badge}
        title={service.title}
        subtitle={service.shortDesc}
        breadcrumbs={[
          { label: 'Our Services', path: '/services' },
          { label: service.title }
        ]}
        backgroundImage={service.image}
      />

      <div className="service-detail-page__container">
        <div className="service-detail-page__layout">
          {/* Main Content Column */}
          <main className="service-detail-page__main">
            {/* Visual Feature */}
            <div className="service-detail-page__hero-img">
              <img src={service.image} alt={service.title} />
              <div className="service-detail-page__hero-badge">
                <FaStar /> Lumina Verified Production Quality
              </div>
            </div>

            {/* In-depth Overview */}
            <section className="service-detail-page__section">
              <span className="badge badge--gold">Overview & Scope</span>
              <h2 className="service-detail-page__heading">
                Turnkey Execution Tailored to Your Audience
              </h2>
              <p className="service-detail-page__text">{service.fullDesc}</p>
            </section>

            {/* Technical Highlights */}
            <section className="service-detail-page__section">
              <h3 className="service-detail-page__subheading">
                What's Included in This Production
              </h3>
              <div className="service-detail-page__features-grid">
                {service.highlights.map((item, idx) => (
                  <div key={idx} className="service-detail-feature">
                    <FaCheckCircle className="service-detail-feature__icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Production Amenities */}
            <section className="service-detail-page__section">
              <h3 className="service-detail-page__subheading">Specialized Amenities</h3>
              <div className="service-detail-page__amenities-list">
                {service.amenities.map((item, idx) => (
                  <div key={idx} className="service-detail-amenity-card">
                    <FaShieldAlt className="service-detail-amenity-card__icon" />
                    <h4>{item}</h4>
                    <p>Included with complete technical supervision and protocol standby.</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom Callout */}
            <div className="service-detail-page__cta-box">
              <div className="service-detail-page__cta-text">
                <h3>Looking for a Customized Setup?</h3>
                <p>We configure custom speaker rigging, LED pitch sizes, and celebrity itineraries.</p>
              </div>
              <Button
                href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
                  `Hi Lumina! I'd like custom pricing for ${service.title}.`
                )}`}
                target="_blank"
                variant="gold"
                size="md"
                icon={<FaWhatsapp />}
              >
                Discuss on WhatsApp
              </Button>
            </div>
          </main>

          {/* Sidebar Column */}
       {/* Other Services */}
<section className="service-detail-page__other-services">
  <div className="service-detail-page__other-services-header">
    <div>
      <span className="badge badge--gold">
        EXPLORE MORE
      </span>

      <h2 className="service-detail-page__heading">
        Discover Our Other Services
      </h2>

      <p className="service-detail-page__text">
        Explore our other event production services and find the right
        solution for your next event.
      </p>
    </div>

    <Link
      to="/services"
      className="service-detail-page__all-services"
    >
      View All Services
      <FaChevronRight aria-hidden="true" />
    </Link>
  </div>

  <div className="service-detail-page__other-services-grid">
    {otherServices.slice(0, 3).map((item) => (
      <Link
        key={item.id}
        to={`/services/${item.slug}`}
        className="service-detail-page__other-service-card"
      >
        <div className="service-detail-page__other-service-image">
          <img src={item.image} alt={item.title} loading="lazy" />
        </div>

        <div className="service-detail-page__other-service-content">
          <h3>{item.title}</h3>

          <p>{item.shortDesc}</p>

          <span>
            Explore Service
            <FaArrowRight aria-hidden="true" />
          </span>
        </div>
      </Link>
    ))}
  </div>
</section>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

