import React, { useState } from 'react';
import './Wrapperbox.css';

const Modal = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  if (!isOpen) return null;

  const handleLogin = () => {
    alert(`Telefon raqam: ${phoneNumber}`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>✖️</button>
        <h2 className="modal-title">Добро пожаловать</h2>
        <p className="modal-subtitle">Войдите с вашим номером телефона</p>

        <input
          className="modal-input"
          type="text"
          placeholder="+998931487733"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <button className="modal-login-btn" onClick={handleLogin}>
          Войти
        </button>

        <div className="modal-footer">
          <span>У вас нет аккаунта?</span>
          <a href="#" className="modal-link">Регистрация</a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
