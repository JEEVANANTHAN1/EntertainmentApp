import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaMusic,
  FaBriefcase,
  FaGraduationCap,
  FaCompactDisc,
  FaGlassCheers,
  FaStar,
  FaTh,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';
import { companyInfo, services } from '../../../data/dummyData';
import { useScrollPosition } from '../../../hooks/useScrollPosition';
import Button from '../../ui/Button/Button';
import './Navbar.scss';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [quickContactOpen, setQuickContactOpen] = useState(false);
  const { isScrolled } = useScrollPosition(30);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setQuickContactOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen || quickContactOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen, quickContactOpen]);

  const serviceIconMap = {
    FaMusic: <FaMusic />,
    FaBriefcase: <FaBriefcase />,
    FaGraduationCap: <FaGraduationCap />,
    FaCompactDisc: <FaCompactDisc />,
    FaGlassCheers: <FaGlassCheers />,
    FaStar: <FaStar />
  };

  const isHome = location.pathname === '/';

  return (
    <header className={`site-header ${isScrolled || !isHome ? 'site-header--scrolled' : ''}`}>
      {/* Main Navigation Bar */}
      <nav className="site-header__nav" aria-label="Main Navigation">
        <div className="site-header__nav-inner">
          {/* Brand Logo */}
          <Link to="/" className="site-header__logo" aria-label="Lumina Entertainments Home">
            <div className="site-header__logo-icon">
              <span>L</span>
            </div>
            <div className="site-header__logo-text">
              <span className="site-header__logo-main">LUMINA</span>
              <span className="site-header__logo-sub">ENTERTAINMENTS</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="site-header__menu">
            <li className="site-header__menu-item">
              <NavLink to="/" end className={({ isActive }) => `site-header__link ${isActive ? 'site-header__link--active' : ''}`}>
                Home
              </NavLink>
            </li>

            <li className="site-header__menu-item">
              <NavLink to="/about" className={({ isActive }) => `site-header__link ${isActive ? 'site-header__link--active' : ''}`}>
                About Us
              </NavLink>
            </li>

            {/* Services with Dropdown */}
            <li
              className="site-header__menu-item site-header__menu-item--has-dropdown"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) => `site-header__link ${isActive ? 'site-header__link--active' : ''}`}
              >
                <span>Our Services</span>
                <FaChevronDown className="site-header__dropdown-caret" />
              </NavLink>

              <div className={`site-header__dropdown ${servicesDropdownOpen ? 'site-header__dropdown--open' : ''}`}>
                <div className="site-header__dropdown-grid">
                  {services.map((srv) => (
                    <Link
                      key={srv.id}
                      to={`/services/${srv.slug}`}
                      className="site-header__dropdown-item"
                    >
                      <div className="site-header__dropdown-icon">
                        {serviceIconMap[srv.icon] || <FaStar />}
                      </div>
                      <div className="site-header__dropdown-text">
                        <span className="site-header__dropdown-title">{srv.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li className="site-header__menu-item">
              <NavLink to="/events" className={({ isActive }) => `site-header__link ${isActive ? 'site-header__link--active' : ''}`}>
                Events
              </NavLink>
            </li>

            <li className="site-header__menu-item">
              <NavLink to="/gallery" className={({ isActive }) => `site-header__link ${isActive ? 'site-header__link--active' : ''}`}>
                Gallery
              </NavLink>
            </li>

            <li className="site-header__menu-item">
              <NavLink to="/enquiry" className={({ isActive }) => `site-header__link ${isActive ? 'site-header__link--active' : ''}`}>
                Enquiry
              </NavLink>
            </li>

            <li className="site-header__menu-item">
              <NavLink to="/contact" className={({ isActive }) => `site-header__link ${isActive ? 'site-header__link--active' : ''}`}>
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Right Action Button & Side Drawer Toggle Icon */}
          <div className="site-header__actions">
            <button
              className="site-header__drawer-btn"
              onClick={() => setQuickContactOpen(true)}
              aria-label="Open Quick Contact"
              title="Quick Contact Info"
            >
              <FaTh />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="site-header__hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Side Quick Contact Drawer (Matching Media Fox Grid Icon) */}
      <div className={`site-header__quick-drawer ${quickContactOpen ? 'site-header__quick-drawer--open' : ''}`}>
        <div className="site-header__mobile-backdrop" onClick={() => setQuickContactOpen(false)} />
        <div className="site-header__quick-drawer-box">
          <button className="site-header__quick-close" onClick={() => setQuickContactOpen(false)}>
            <FaTimes />
          </button>
          <div className="site-header__logo" style={{ marginBottom: '24px' }}>
            <div className="site-header__logo-icon"><span>L</span></div>
            <div className="site-header__logo-text">
              <span className="site-header__logo-main">LUMINA</span>
              <span className="site-header__logo-sub">ENTERTAINMENTS</span>
            </div>
          </div>
          <h4>Contact Us</h4>
          <p>At Lumina, we excel in handling all event types. Whether you require celebrity connections or special occasions, we're your go-to experts.</p>
          <div className="site-header__quick-info">
            <p><strong>Phone:</strong> <a href={`tel:${companyInfo.phone}`}>{companyInfo.phoneFormatted}</a></p>
            <p><strong>Email:</strong> <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a></p>
            <p><strong>Timing:</strong> {companyInfo.workingHours}</p>
          </div>
          <Button to="/enquiry" variant="primary" size="md" style={{ marginTop: '20px', width: '100%' }}>
            Enquire Now
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`site-header__mobile-drawer ${mobileMenuOpen ? 'site-header__mobile-drawer--open' : ''}`}>
        <div className="site-header__mobile-backdrop" onClick={() => setMobileMenuOpen(false)} />

        <div className="site-header__mobile-content">
          <div className="site-header__mobile-top">
            <div className="site-header__logo">
              <div className="site-header__logo-icon">
                <span>L</span>
              </div>
              <div className="site-header__logo-text">
                <span className="site-header__logo-main">LUMINA</span>
                <span className="site-header__logo-sub">ENTERTAINMENTS</span>
              </div>
            </div>
            <button
              className="site-header__mobile-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          <ul className="site-header__mobile-nav">
            <li>
              <NavLink to="/" end className="site-header__mobile-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="site-header__mobile-link">
                About Us
              </NavLink>
            </li>
            <li>
              <div
                className="site-header__mobile-link site-header__mobile-link--toggle"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>Our Services</span>
                <FaChevronDown className={`site-header__accordion-arrow ${servicesDropdownOpen ? 'site-header__accordion-arrow--rotated' : ''}`} />
              </div>

              {servicesDropdownOpen && (
                <ul className="site-header__mobile-submenu">
                  {services.map((srv) => (
                    <li key={srv.id}>
                      <Link to={`/services/${srv.slug}`} className="site-header__mobile-sublink">
                        <span className="site-header__mobile-subicon">
                          {serviceIconMap[srv.icon] || <FaStar />}
                        </span>
                        <span>{srv.title}</span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link to="/services" className="site-header__mobile-sublink site-header__mobile-sublink--all">
                      View All Services →
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink to="/events" className="site-header__mobile-link">
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className="site-header__mobile-link">
                Gallery <span className="site-header__mobile-badge">New</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/enquiry" className="site-header__mobile-link">
                Enquiry
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="site-header__mobile-link">
                Contact Us
              </NavLink>
            </li>
          </ul>

          <div className="site-header__mobile-footer">
            <Button to="/enquiry" variant="primary" size="md" className="site-header__mobile-cta">
              Plan Your Event
            </Button>

            <div className="site-header__mobile-contacts">
              <a href={`tel:${companyInfo.phone}`} className="site-header__mobile-contact-item">
                <FaPhoneAlt /> <span>{companyInfo.phone}</span>
              </a>
              <a href={`mailto:${companyInfo.email}`} className="site-header__mobile-contact-item">
                <FaEnvelope /> <span>{companyInfo.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

