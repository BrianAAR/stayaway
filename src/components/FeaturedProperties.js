import React from 'react';
import './FeaturedProperties.css';

function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      title: 'Casa de lujo en la playa',
      location: 'Cancún, México',
      price: '3500 MXN por noche',
      image: '/path-to-image1.jpg',
    },
    {
      id: 2,
      title: 'Apartamento moderno en el centro',
      location: 'Ciudad de México, México',
      price: '1500 MXN por noche',
      image: '/path-to-image2.jpg',
    },
  ];

  return (
    <div className="featured-properties">
      <h2>Propiedades Destacadas</h2>
      <div className="property-list">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} />
            <h3>{property.title}</h3>
            <p>{property.location}</p>
            <p>{property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProperties;
