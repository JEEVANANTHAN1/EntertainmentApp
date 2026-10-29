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

     
    </div>
  );
};

export default Contact;

