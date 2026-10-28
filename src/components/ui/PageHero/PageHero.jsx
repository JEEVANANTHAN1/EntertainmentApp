import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaHome } from 'react-icons/fa';
import './PageHero.scss';

export const PageHero = ({
  title,
  subtitle,
  badge,
  breadcrumbs = [],
  backgroundImage = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80'
}) => {
  return (
    <div className="page-hero">
      <div
        className="page-hero__bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="page-hero__overlay" />

      <div className="page-hero__container">
        {/* Breadcrumbs */}
        <nav className="page-hero__breadcrumbs" aria-label="Breadcrumb">
          <Link to="/" className="page-hero__crumb">
            <FaHome className="page-hero__crumb-icon" />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <FaChevronRight className="page-hero__separator" />
              {crumb.path ? (
                <Link to={crumb.path} className="page-hero__crumb">
                  {crumb.label}
                </Link>
              ) : (
                <span className="page-hero__crumb page-hero__crumb--active">
                  {crumb.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {badge && <span className="badge badge--gold">{badge}</span>}

        <h1 className="page-hero__title">{title}</h1>

        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHero;

