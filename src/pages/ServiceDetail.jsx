import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
  FaCalendarAlt,
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

  // Quick form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    city: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

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
          <aside className="service-detail-page__sidebar">
            {/* Direct Booking Card */}
            <div className="service-booking-card">
              <h3 className="service-booking-card__title">Request Service Quote</h3>
              <p className="service-booking-card__subtitle">
                Fill out the quick brief and our director will contact you within 2 hours.
              </p>

              {submitted ? (
                <div className="service-booking-card__success">
                  <FaCheckCircle />
                  <h4>Quote Request Sent!</h4>
                  <p>Our senior event planner will call you shortly on {formData.phone}.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="service-booking-card__form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. Anandha Kumar"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="date">Tentative Event Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="city">City / Venue</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="e.g. Coimbatore, Chennai"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Event Notes (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      placeholder="Estimated crowd, preferred artists, venue size..."
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button type="submit" variant="primary" size="md" className="btn--full">
                    Submit Quote Request
                  </Button>
                </form>
              )}

              <div className="service-booking-card__help">
                <FaPhoneAlt />
                <span>Urgent query? Call: </span>
                <a href={`tel:${companyInfo.phone}`}>{companyInfo.phoneFormatted}</a>
              </div>
            </div>

            {/* Other Services Navigation Widget */}
            <div className="service-nav-widget">
              <h4 className="service-nav-widget__title">Other Services</h4>
              <ul className="service-nav-widget__list">
                {otherServices.map((s) => (
                  <li key={s.id}>
                    <Link to={`/services/${s.slug}`} className="service-nav-widget__link">
                      <span>{s.title}</span>
                      <FaChevronRight />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

