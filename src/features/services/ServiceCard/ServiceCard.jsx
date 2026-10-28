import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaMusic,
  FaBriefcase,
  FaGraduationCap,
  FaCompactDisc,
  FaGlassCheers,
  FaStar,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import Button from '../../../components/ui/Button/Button';
import './ServiceCard.scss';

export const ServiceCard = ({ service, index }) => {
  const iconMap = {
    FaMusic: <FaMusic />,
    FaBriefcase: <FaBriefcase />,
    FaGraduationCap: <FaGraduationCap />,
    FaCompactDisc: <FaCompactDisc />,
    FaGlassCheers: <FaGlassCheers />,
    FaStar: <FaStar />
  };

  const isEven = index % 2 === 1;

  return (
    <article className={`detailed-service-row ${isEven ? 'detailed-service-row--reverse' : ''}`}>
      {/* Media Column */}
      <div className="detailed-service-row__media">
        <img src={service.image} alt={service.title} loading="lazy" />
        <div className="detailed-service-row__badge">{service.badge}</div>
        <div className="detailed-service-row__icon-bubble">
          {iconMap[service.icon] || <FaStar />}
        </div>
      </div>

      {/* Content Column */}
      <div className="detailed-service-row__content">
        <span className="badge badge--gold">Vertical 0{index + 1}</span>

        <h3 className="detailed-service-row__title">
          <Link to={`/services/${service.slug}`}>{service.title}</Link>
        </h3>

        <p className="detailed-service-row__desc">{service.fullDesc}</p>

        {/* Technical Highlights */}
        <div className="detailed-service-row__highlights">
          <h4 className="detailed-service-row__highlights-title">Key Capabilities:</h4>
          <ul>
            {service.highlights.map((item, idx) => (
              <li key={idx}>
                <FaCheckCircle className="detailed-service-row__check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Amenities tags */}
        <div className="detailed-service-row__amenities">
          {service.amenities.map((item, idx) => (
            <span key={idx} className="detailed-service-row__amenity-pill">
              {item}
            </span>
          ))}
        </div>

        <div className="detailed-service-row__actions">
          <Button
            to={`/services/${service.slug}`}
            variant="primary"
            size="md"
            icon={<FaArrowRight />}
          >
            Explore Specifications
          </Button>
          <Button
            to={`/enquiry?service=${service.slug}`}
            variant="outline"
            size="md"
          >
            Book This Service
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;

