import React from 'react';
import { teamMembers } from '../../../data/dummyData';
import './TeamSection.scss';

export const TeamSection = () => {
  return (
    <section className="team-section-home" aria-label="Our Team Members">
      <div className="team-section-home__container">
        {/* Section Title */}
        <div className="team-section-home__header">
          <span className="team-section-home__sub-title">Our Best</span>
          <h2 className="team-section-home__title">Team Members</h2>
          <div className="title-dash">
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* Team Grid */}
        <div className="team-section-home__grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member-card">
              <div className="team-member-card__image-wrap">
                <img src={member.image} alt={member.name} loading="lazy" />
              </div>
              <div className="team-member-card__info">
                <h4 className="team-member-card__name">{member.name}</h4>
                <p className="team-member-card__role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
