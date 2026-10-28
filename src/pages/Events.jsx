import React, { useState } from 'react';
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaTicketAlt,
  FaFilter
} from 'react-icons/fa';
import PageHero from '../components/ui/PageHero/PageHero';
import SectionTitle from '../components/ui/SectionTitle/SectionTitle';
import Button from '../components/ui/Button/Button';
import CTABanner from '../features/home/CTABanner/CTABanner';
import { upcomingEvents } from '../data/dummyData';
import './Events.scss';

export const Events = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Concerts', 'Corporate', 'DJ Nights'];

  const filteredEvents = upcomingEvents.filter(
    (e) => filter === 'All' || e.category === filter
  );

  return (
    <div className="events-page">
      <PageHero
        badge="Live Stage Calendar"
        title="Upcoming & Signature Events"
        subtitle="Explore upcoming mega concerts, youth festivals, and corporate galas curated and powered by Lumina Entertainments."
        breadcrumbs={[{ label: 'Events' }]}
        backgroundImage="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="events-list-section">
        <div className="events-list-section__container">
          <SectionTitle
            badge="Live Experiences"
            title="Calendar of"
            highlight="Grand Gatherings"
            description="Catch our stagecraft live in action or reserve delegate passes and VIP enclosures."
            align="center"
          />

          {/* Filter Pills */}
          <div className="events-list-section__filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`event-filter-pill ${filter === cat ? 'event-filter-pill--active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Event Cards Grid */}
          <div className="events-list-section__grid">
            {filteredEvents.map((evt) => (
              <article key={evt.id} className="event-card">
                <div className="event-card__media">
                  <img src={evt.image} alt={evt.title} loading="lazy" />
                  <span className="event-card__status">{evt.status}</span>
                  <div className="event-card__date-box">
                    <FaCalendarAlt className="event-card__date-icon" />
                    <span>{evt.date}</span>
                  </div>
                </div>

                <div className="event-card__body">
                  <span className="event-card__category">{evt.category}</span>
                  <h3 className="event-card__title">{evt.title}</h3>
                  <p className="event-card__desc">{evt.description}</p>

                  <div className="event-card__meta">
                    <div className="event-card__meta-item">
                      <FaMapMarkerAlt />
                      <span>{evt.venue}</span>
                    </div>
                    <div className="event-card__meta-item">
                      <FaClock />
                      <span>{evt.time}</span>
                    </div>
                  </div>

                  <div className="event-card__footer">
                    <Button to="/enquiry" variant="primary" size="sm" icon={<FaTicketAlt />}>
                      Reserve VIP Entry
                    </Button>
                    <Button
                      to="/contact"
                      variant="outline"
                      size="sm"
                    >
                      Inquire Sponsorship
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default Events;

