// src/components/Offers.js
import React from 'react';
import './Offers.css';

const Offers = () => {
  return (
    <div className="offers">
      <h2>Ofertas</h2>
      <div className="offers-list">
        <div className="offer">Descuentos de verano</div>
        <div className="offer">Ofertas de último minuto</div>
        <div className="offer">Promociones exclusivas</div>
      </div>
    </div>
  );
};

export default Offers;
