// client/src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 StayAway. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="/">Términos</a>
          <a href="/">Privacidad</a>
          <a href="/">Contacto</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
