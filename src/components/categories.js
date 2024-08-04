import React from 'react';
import './categories.css';

function Categories() {
  const categories = [
    'Iconicos',
    'Albercas increíbles',
    'Cabañas',
    'Frente a la playa',
    'Casas de campo',
  ];

  return (
    <div className="categories">
      <h2>Categorías</h2>
  <div className="categories-list"> {/* Cambio aquí */}
    {categories.map((category, index) => (
      <div key={index} className="category">
        {category}
      </div>
    ))}
  </div>
</div>

  );
}

export default Categories;
