import React from 'react';
import './Card.scss';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  glow = 'red', // 'red', 'gold', 'none'
  padding = 'md',
  onClick
}) => {
  return (
    <div
      className={`ui-card ui-card--glow-${glow} ui-card--padding-${padding} ${
        hoverEffect ? 'ui-card--interactive' : ''
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;

