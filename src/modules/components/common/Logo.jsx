import React from 'react';
import LogoImg from 'media/images/logo-png-sharebigya.png';

const Logo = ({ logoText = 'Sharebigya' }) => (
  <div className="auth-logo-container">
    <div className="logo-wrapper">
      <img src={LogoImg} alt="Sharebigya Logo" />
    </div>
    <div className="logo-text">
      <h3>{logoText}</h3>
    </div>
  </div>
);

export default Logo;
