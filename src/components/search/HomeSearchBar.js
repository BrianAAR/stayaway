import React from 'react';
import '../../styles/HomeSearchBar.css';

const HomeSearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Destino" className="search-input" />
      <input type="date" placeholder="Llegada" className="search-input" />
      <input type="date" placeholder="Salida" className="search-input" />
      <input type="number" placeholder="Huéspedes" className="search-input" />
      <button className="search-button">Buscar</button>
    </div>
  );
};

export default HomeSearchBar;
