import React, { useState } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaInstagram,
  FaFacebookF,
  FaYoutube
} from 'react-icons/fa';
import PageHero from '../components/ui/PageHero/PageHero';
import SectionTitle from '../components/ui/SectionTitle/SectionTitle';
import Button from '../components/ui/Button/Button';
import { companyInfo } from '../data/dummyData';
import './Contact.scss';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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

  return (
    <div className="contact-page">
      <PageHero
        badge="Connect Directly"
        title="Contact Lumina Entertainments"
        subtitle="Have an inquiry, sponsorship collaboration, or artist booking query? Our event management team in Coimbatore is available Monday through Saturday."
        breadcrumbs={[{ label: 'Contact Us' }]}
        backgroundImage="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Contact Cards Strip */}
      <section className="contact-info-strip">
        <div className="contact-info-strip__container">
          <div className="contact-info-strip__grid">
            {/* Phone */}
            <div className="contact-card">
              <div className="contact-card__icon contact-card__icon--phone">
                <FaPhoneAlt />
              </div>
              <h3 className="contact-card__title">Direct Phone Line</h3>
              <p className="contact-card__text">Speak directly with an event lead</p>
              <a href={`tel:${companyInfo.phone}`} className="contact-card__link">
                {companyInfo.phoneFormatted}
              </a>
            </div>

            {/* Email */}
            <div className="contact-card">
              <div className="contact-card__icon contact-card__icon--email">
                <FaEnvelope />
              </div>
              <h3 className="contact-card__title">Email Inquiry</h3>
              <p className="contact-card__text">Send event riders & proposals</p>
              <a href={`mailto:${companyInfo.email}`} className="contact-card__link">
                {companyInfo.email}
              </a>
            </div>

            {/* Office */}
            <div className="contact-card">
              <div className="contact-card__icon contact-card__icon--location">
                <FaMapMarkerAlt />
              </div>
              <h3 className="contact-card__title">Coimbatore Office</h3>
              <p className="contact-card__text">Avinashi Road, Peelamedu</p>
              <span className="contact-card__subtext">Coimbatore, Tamil Nadu 641004</span>
            </div>

            {/* Hours */}
            <div className="contact-card">
              <div className="contact-card__icon contact-card__icon--hours">
                <FaClock />
              </div>
              <h3 className="contact-card__title">Operating Hours</h3>
              <p className="contact-card__text">Monday – Saturday</p>
              <span className="contact-card__subtext">9:00 AM – 7:30 PM IST</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="contact-main-section">
        <div className="contact-main-section__container">
          <div className="contact-main-section__grid">
            {/* Form */}
            <div className="contact-form-wrapper">
              <span className="badge badge--gold">Send a Message</span>
              <h2 className="contact-form-wrapper__title">How Can We Assist You?</h2>
              <p className="contact-form-wrapper__desc">
                Whether requesting equipment availability, artist fee estimates, or customized stage setups, share your thoughts below.
              </p>

              {submitted ? (
                <div className="contact-success-state">
                  <FaCheckCircle className="contact-success-state__icon" />
                  <h3>Message Dispatched!</h3>
                  <p>
                    Thank you for reaching out, <strong>{formData.name}</strong>. Our coordination office has logged your message and will reply within 2 hours.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Send Another Note
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name <span className="required-star">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address <span className="required-star">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+91 98421 00000"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Subject / Purpose <span className="required-star">*</span></label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="e.g. DJ Night Technical Requirement"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message <span className="required-star">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Share questions, proposed dates, or specific concert equipment requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="contact-form__actions">
                    <Button type="submit" variant="primary" size="lg" icon={<FaPaperPlane />}>
                      Send Message
                    </Button>

                    <Button
                      href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
                        'Hi Lumina! I am contacting you from the website contact page.'
                      )}`}
                      target="_blank"
                      variant="gold"
                      size="lg"
                      icon={<FaWhatsapp />}
                    >
                      Instant WhatsApp
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Map & Office Card */}
            <div className="contact-map-wrapper">
              <div className="contact-map-card">
                <h3 className="contact-map-card__title">Locate Our Studio</h3>
                <p className="contact-map-card__desc">
                  Visit our state-of-the-art staging studio and consultation lounge on Avinashi Road, Coimbatore.
                </p>

                {/* Interactive Google Maps Iframe for Coimbatore */}
                <div className="contact-map-frame">
                  <iframe
                    title="Lumina Entertainments Coimbatore Office"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173166549!2d76.89714856417726!3d11.014126297316315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="contact-map-card__socials">
                  <span>Connect With Us on Social:</span>
                  <div className="contact-social-icons">
                    <a href={companyInfo.socialLinks.instagram} target="_blank" rel="noreferrer">
                      <FaInstagram />
                    </a>
                    <a href={companyInfo.socialLinks.facebook} target="_blank" rel="noreferrer">
                      <FaFacebookF />
                    </a>
                    <a href={companyInfo.socialLinks.youtube} target="_blank" rel="noreferrer">
                      <FaYoutube />
                    </a>
                    <a href={companyInfo.socialLinks.whatsapp} target="_blank" rel="noreferrer">
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

