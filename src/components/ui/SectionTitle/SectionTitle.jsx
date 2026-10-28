import React from 'react';
import './SectionTitle.scss';

export const SectionTitle = ({
  badge,
  title,
  highlight,
  description,
  align = 'center',
  className = ''
}) => {
  return (
    <div className={`section-header section-header--${align} ${className}`}>
      {badge && (
        <span className="section-header__badge">
          {badge}
        </span>
      )}
      <h2 className="section-header__title">
        {title} {highlight && <span className="section-header__highlight">{highlight}</span>}
      </h2>
      
      {/* Signature Media Fox Triple Color Dash */}
      <div className={`title-dash ${align === 'left' ? 'title-dash--left' : ''}`}>
        <span />
        <span />
        <span />
      </div>

      {description && <p className="section-header__description">{description}</p>}
    </div>
  );
};

export default SectionTitle;
