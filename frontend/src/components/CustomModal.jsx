import React from 'react';
import '@/styles/components/CustomModal.css'; 

const CustomModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default CustomModal;