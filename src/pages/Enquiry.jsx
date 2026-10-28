import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaCalendarAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt
} from 'react-icons/fa';
import PageHero from '../components/ui/PageHero/PageHero';
import SectionTitle from '../components/ui/SectionTitle/SectionTitle';
import Button from '../components/ui/Button/Button';
import { companyInfo, services } from '../data/dummyData';
import './Enquiry.scss';

export const Enquiry = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || 'concerts';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceCategory: preselectedService,
    expectedCrowd: '1000 - 3000 Attendees',
    eventDate: '',
    city: 'Coimbatore',
    budgetRange: '₹5 Lakhs - ₹15 Lakhs',
    requirements: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const text = `*New Event Booking Enquiry - Lumina Entertainments*\n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Service:* ${formData.serviceCategory}\n*Date:* ${formData.eventDate}\n*City:* ${formData.city}\n*Crowd:* ${formData.expectedCrowd}\n*Budget:* ${formData.budgetRange}\n*Requirements:* ${formData.requirements || 'N/A'}`;
    return `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="enquiry-page">
      <PageHero
        badge="Direct Booking Portal"
        title="Event Planning & Quotation"
        subtitle="Share your event brief with our directors. We prepare comprehensive acoustic layouts, stage renderings, and artist options within 24 hours."
        breadcrumbs={[{ label: 'Enquiry' }]}
        backgroundImage="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="enquiry-form-section">
        <div className="enquiry-form-section__container">
          <div className="enquiry-form-section__grid">
            {/* Form Column */}
            <div className="enquiry-form-card">
              <span className="badge badge--gold">Fast Response Guaranteed</span>
              <h2 className="enquiry-form-card__title">Tell Us About Your Event</h2>
              <p className="enquiry-form-card__subtitle">
                Fill in the details below, or submit directly via WhatsApp for urgent bookings.
              </p>

              {submitted ? (
                <div className="enquiry-success-message">
                  <div className="enquiry-success-message__icon">
                    <FaCheckCircle />
                  </div>
                  <h3>Thank You, {formData.fullName}!</h3>
                  <p>
                    Your enquiry for <strong>{formData.serviceCategory}</strong> has been received by our lead event coordinator. We will call you on <strong>{formData.phone}</strong> shortly.
                  </p>

                  <div className="enquiry-success-message__actions">
                    <Button
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      variant="gold"
                      icon={<FaWhatsapp />}
                    >
                      Forward Brief to WhatsApp
                    </Button>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                    >
                      Submit Another Query
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="enquiry-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="e.g. Senthil Nathan"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+91 98421 00000"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="senthil@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="serviceCategory">Service Vertical *</label>
                      <select
                        id="serviceCategory"
                        name="serviceCategory"
                        value={formData.serviceCategory}
                        onChange={handleInputChange}
                        required
                      >
                        {services.map((srv) => (
                          <option key={srv.slug} value={srv.slug}>
                            {srv.title}
                          </option>
                        ))}
                        <option value="other">Other Bespoke Requirement</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="eventDate">Tentative Event Date *</label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="city">City / Destination *</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="e.g. Coimbatore, Chennai, Madurai"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="expectedCrowd">Expected Audience Size</label>
                      <select
                        id="expectedCrowd"
                        name="expectedCrowd"
                        value={formData.expectedCrowd}
                        onChange={handleInputChange}
                      >
                        <option value="< 500 Attendees">Up to 500 Attendees</option>
                        <option value="500 - 1500 Attendees">500 – 1,500 Attendees</option>
                        <option value="1500 - 4000 Attendees">1,500 – 4,000 Attendees</option>
                        <option value="5000+ Stadium Scale">5,000+ Stadium Scale</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="budgetRange">Estimated Budget</label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleInputChange}
                      >
                        <option value="₹2 Lakhs - ₹5 Lakhs">₹2 Lakhs – ₹5 Lakhs</option>
                        <option value="₹5 Lakhs - ₹15 Lakhs">₹5 Lakhs – ₹15 Lakhs</option>
                        <option value="₹15 Lakhs - ₹35 Lakhs">₹15 Lakhs – ₹35 Lakhs</option>
                        <option value="₹35 Lakhs+ Mega Production">₹35 Lakhs+ (Mega Stage Production)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="requirements">Event Requirements & Artist Wishlist</label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      rows="4"
                      placeholder="Specify preferred singers, anchor/emcee needs, LED stage size, pyrotechnics, special entries..."
                      value={formData.requirements}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="enquiry-form__actions">
                    <Button type="submit" variant="primary" size="lg">
                      Submit Event Enquiry
                    </Button>

                    <Button
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      variant="gold"
                      size="lg"
                      icon={<FaWhatsapp />}
                    >
                      Instant WhatsApp Chat
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar Guidance Column */}
            <div className="enquiry-info-sidebar">
              {/* Direct Hotline Box */}
              <div className="enquiry-box enquiry-box--hotline">
                <h3>VIP Booking Desk</h3>
                <p>Need urgent celebrity booking or emergency audio equipment?</p>
                <div className="enquiry-hotline-item">
                  <FaPhoneAlt className="enquiry-hotline-icon" />
                  <div>
                    <span>Call Directly:</span>
                    <a href={`tel:${companyInfo.phone}`}>{companyInfo.phoneFormatted}</a>
                  </div>
                </div>
                <div className="enquiry-hotline-item">
                  <FaEnvelope className="enquiry-hotline-icon" />
                  <div>
                    <span>Direct Email:</span>
                    <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                  </div>
                </div>
                <div className="enquiry-hotline-item">
                  <FaClock className="enquiry-hotline-icon" />
                  <div>
                    <span>Desk Hours:</span>
                    <strong>{companyInfo.workingHours}</strong>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="enquiry-box">
                <h4>The Lumina Promise</h4>
                <ul className="enquiry-guarantees-list">
                  <li>
                    <FaCheckCircle /> Transparent itemized technical quotes
                  </li>
                  <li>
                    <FaCheckCircle /> Direct legal artist contracts & insurance
                  </li>
                  <li>
                    <FaCheckCircle /> Dedicated production director on site
                  </li>
                  <li>
                    <FaCheckCircle /> Full backup generators and sound rigs
                  </li>
                </ul>
              </div>

              {/* Location Card */}
              <div className="enquiry-box">
                <h4>Registered Operations Office</h4>
                <div className="enquiry-location-item">
                  <FaMapMarkerAlt />
                  <p>{companyInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;

