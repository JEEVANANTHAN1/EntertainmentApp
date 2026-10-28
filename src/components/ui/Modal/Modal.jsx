import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import './Modal.scss';

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md', // 'sm', 'md', 'lg', 'full'
  className = ''
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="ui-modal" role="dialog" aria-modal="true">
      <div className="ui-modal__backdrop" onClick={onClose} />

      <div className={`ui-modal__dialog ui-modal__dialog--${size} ${className}`}>
        <button
          className="ui-modal__close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        {title && (
          <div className="ui-modal__header">
            <h3 className="ui-modal__title">{title}</h3>
          </div>
        )}

        <div className="ui-modal__body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

