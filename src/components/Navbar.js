import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">Inicio</a>
      <a href="/categories">Categorías</a>
      <a href="/experiences">Experiencias</a>
      <a href="/contact">Contacto</a>
    </nav>
  );
}

export default Navbar;
