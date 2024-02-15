import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; // Import your modal CSS styles

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  const handlePrint = () => {
    window.print();
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>Close</button>
        {children}
        <button className="modal-print-btn" onClick={handlePrint}>Print</button>
      </div>
    </div>,
    document.getElementById('modal-root') // Ensure you have a root element in your HTML file with id "modal-root"
  );
};

export default Modal;
