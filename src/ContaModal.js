import React from 'react';
import './modal.css';

export default function ContaModal({ isVisible, onClose, children }) {
  if (!isVisible) return null;
  

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}
