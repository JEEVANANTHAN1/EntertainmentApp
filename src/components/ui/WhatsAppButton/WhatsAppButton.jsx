import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { companyInfo } from '../../../data/dummyData';
import './WhatsAppButton.scss';

export const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
    companyInfo.whatsappMessage
  )}`;

  return (
    <aside className="whatsapp-float" aria-label="WhatsApp Quick Contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float__link"
        aria-label="Chat with our Event Planner on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="whatsapp-float__pulse" aria-hidden="true" />
        <span className="whatsapp-float__btn">
          <FaWhatsapp className="whatsapp-float__icon" />
        </span>
        <span className="whatsapp-float__tooltip">Chat with us on WhatsApp</span>
      </a>
    </aside>
  );
};

export default WhatsAppButton;
