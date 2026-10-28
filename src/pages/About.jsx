import React, { useState } from 'react';
import {
  FaCheckCircle,
  FaAward,
  FaLightbulb,
  FaBullseye,
  FaShieldAlt,
  FaMicrophone,
  FaUsers,
  FaChevronDown
} from 'react-icons/fa';
import PageHero from '../components/ui/PageHero/PageHero';
import SectionTitle from '../components/ui/SectionTitle/SectionTitle';
import Button from '../components/ui/Button/Button';
import CTABanner from '../features/home/CTABanner/CTABanner';
import { companyInfo, faqs, dummyMedia } from '../data/dummyData';
import './About.scss';

export const About = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="about-page">
      <PageHero
        badge="Our Legacy"
        title="Redefining Live Entertainment"
        subtitle="For over 8 years, Lumina Entertainments has set the benchmark for stagecraft, live acoustic engineering, and high-profile celebrity coordination across South India."
        breadcrumbs={[{ label: 'About Us' }]}
        backgroundImage={dummyMedia.aboutImage1}
      />

      {/* Story & Evolution */}
      <section className="about-story-section">
        <div className="about-story-section__container">
          <div className="about-story-section__grid">
            <div className="about-story-section__content">
              <span className="badge badge--gold">The Lumina Journey</span>
              <h2 className="about-story-section__title">
                Born From a Passion for Unforgettable Spectacles
              </h2>
              <p className="about-story-section__p1">
                Founded in 2018 in Coimbatore, Lumina Entertainments began with a single mission: to eliminate the friction between grand creative visions and real-world stage execution.
              </p>
              <p className="about-story-section__p2">
                Today, our operations encompass stadium live concerts, high-stakes corporate launches, university youth festivals, private royal celebrations, and direct celebrity artist management. Having executed 250+ live concerts and 180+ corporate galas, we have earned a reputation as the most dependable event architecture firm in the region.
              </p>
              <p className="about-story-section__p3">
                We believe that every occasion—whether an intimate VIP brand launch or a 10,000-person music festival—deserves flawless acoustic balance, immersive visual architecture, and military-precision timeline control.
              </p>

              <div className="about-story-section__meta-box">
                <div className="about-story-section__meta-item">
                  <span className="about-story-section__meta-num">8+</span>
                  <span className="about-story-section__meta-text">Years Continuous Excellence</span>
                </div>
                <div className="about-story-section__meta-item">
                  <span className="about-story-section__meta-num">500+</span>
                  <span className="about-story-section__meta-text">Triumphant Events Delivered</span>
                </div>
              </div>
            </div>

            <div className="about-story-section__media">
              <img
                src={dummyMedia.aboutImage2}
                alt="Lumina Concert Stage Experience"
                className="about-story-section__img"
              />
              <div className="about-story-section__quote-card">
                <p>
                  "We don't merely manage events; we design sensory memories that reverberate for a lifetime."
                </p>
                <span>— Board of Directors, Lumina Entertainments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-values-section">
        <div className="about-values-section__container">
          <div className="about-values-section__grid">
            <div className="about-value-card">
              <div className="about-value-card__icon about-value-card__icon--mission">
                <FaBullseye />
              </div>
              <h3 className="about-value-card__title">Our Mission</h3>
              <p className="about-value-card__desc">
                To engineer world-class event experiences by seamlessly fusing cutting-edge audiovisual technology, unmatched celebrity artist access, and meticulous logistics—empowering brands and individuals to celebrate without compromise.
              </p>
            </div>

            <div className="about-value-card">
              <div className="about-value-card__icon about-value-card__icon--vision">
                <FaLightbulb />
              </div>
              <h3 className="about-value-card__title">Our Vision</h3>
              <p className="about-value-card__desc">
                To be the foremost benchmark for experiential entertainment across India, recognized globally for setting new heights in live acoustics, architectural stagecraft, and client trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why-section">
        <div className="about-why-section__container">
          <SectionTitle
            badge="The Lumina Standard"
            title="Why Leading Brands & Organizers"
            highlight="Choose Us"
            description="Our integrated approach combines proprietary audiovisual inventories, exclusive artist liaison, and rigorous safety protocols."
            align="center"
          />

          <div className="about-why-section__grid">
            <div className="why-card">
              <div className="why-card__icon">
                <FaMicrophone />
              </div>
              <h4 className="why-card__title">Concert-Grade Acoustics</h4>
              <p className="why-card__desc">
                We utilize calibrated digital line arrays, high-wattage sub-bass systems, and digital sound engineers ensuring crystal audio fidelity in stadiums and halls.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card__icon">
                <FaUsers />
              </div>
              <h4 className="why-card__title">Direct Celebrity Network</h4>
              <p className="why-card__desc">
                Direct access to top cinema stars, reality TV vocalists (Super Singer), stand-up comics, and sports icons without intermediaries.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card__icon">
                <FaShieldAlt />
              </div>
              <h4 className="why-card__title">Zero-Compromise Safety</h4>
              <p className="why-card__desc">
                Full crowd control barricades, licensed pyrotechnicians, medical standby protocols, and municipal compliance approvals.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card__icon">
                <FaAward />
              </div>
              <h4 className="why-card__title">Turnkey Production</h4>
              <p className="why-card__desc">
                From initial 3D stage rendering and hospitality to live multi-cam broadcasting, we handle every detail so you can enjoy the spotlight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="about-faq-section">
        <div className="about-faq-section__container">
          <SectionTitle
            badge="Got Questions?"
            title="Frequently Asked"
            highlight="Questions"
            description="Everything you need to know about planning, booking, and executing an event with Lumina Entertainments."
            align="center"
          />

          <div className="about-faq-section__list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`faq-accordion-item ${isOpen ? 'faq-accordion-item--open' : ''}`}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <div className="faq-accordion-item__header">
                    <h3 className="faq-accordion-item__question">{faq.q}</h3>
                    <FaChevronDown className="faq-accordion-item__arrow" />
                  </div>
                  {isOpen && (
                    <div className="faq-accordion-item__body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default About;

