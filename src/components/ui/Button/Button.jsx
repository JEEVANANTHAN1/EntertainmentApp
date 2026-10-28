import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

export const Button = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  type = 'button',
  disabled = false,
  target,
  rel
}) => {
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn__icon btn__icon--left">{icon}</span>}
      <span className="btn__text">{children}</span>
      {icon && iconPosition === 'right' && <span className="btn__icon btn__icon--right">{icon}</span>}
    </>
  );

  const classes = `btn btn--${variant} btn--${size} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;

