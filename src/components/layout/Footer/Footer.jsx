import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp
} from 'react-icons/fa';
import { companyInfo } from '../../../data/dummyData';
import BrandPrismMark from '../../ui/BrandPrismMark/BrandPrismMark';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="mediafox-footer" aria-label="Site Footer">
        <div className="mediafox-footer__container">
          <div className="mediafox-footer__content">
            {/* Centered Brand Logo */}
            <div className="mediafox-footer__brand">
              <Link to="/" className="mediafox-footer__logo">
                <div className="mediafox-footer__logo-badge">
                  <BrandPrismMark size={46} />
                </div>
                <div className="mediafox-footer__logo-text">
                  <span className="mediafox-footer__logo-main">LUMINA</span>
                  <span className="mediafox-footer__logo-sub">ENTERTAINMENTS</span>
                </div>
              </Link>

              {/* Bio Narrative */}
              <p className="mediafox-footer__text">
                At Lumina, we excel in handling all event types. Whether you require celebrity connections for shop openings or special occasions, we're your go-to experts.
              </p>
            </div>

            {/* Social Icons List */}
            <ul className="mediafox-footer__socials">
              <li>
                <a
                  href={companyInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href={companyInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href={companyInfo.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>

            {/* Direct Contact Pills */}
            <div className="mediafox-footer__contacts">
              <a href={`tel:${companyInfo.phone}`} className="mediafox-footer__contact-pill">
                <span className="mediafox-footer__contact-icon">
                  <FaPhoneAlt />
                </span>
                <span className="mediafox-footer__contact-info">
                  <strong>Phone Number</strong>
                  <span>{companyInfo.phoneFormatted}</span>
                </span>
              </a>

              <a href={`mailto:${companyInfo.email}`} className="mediafox-footer__contact-pill">
                <span className="mediafox-footer__contact-icon">
                  <FaEnvelope />
                </span>
                <span className="mediafox-footer__contact-info">
                  <strong>Mail us</strong>
                  <span>{companyInfo.email}</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mediafox-footer__bottom">
          <div className="mediafox-footer__bottom-container">
            <div className="mediafox-footer__powered">
              <span>Powered by: <strong>Mist Solutions</strong></span>
            </div>

            <div className="mediafox-footer__copyright">
              <p>
                Copyright © {new Date().getFullYear()} All Rights Reserved by{' '}
                <Link to="/">Lumina</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;
