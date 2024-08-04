// client/src/components/PropertyList.js
import React from 'react';
import './PropertyList.css';

const properties = [
  {
    id: 1,
    title: "Casa de playa",
    location: "Cancún, México",
    price: "150 USD/noche",
    image: "/images/beach-house.jpg"
  },
  {
    id: 2,
    title: "Apartamento en la ciudad",
    location: "Nueva York, USA",
    price: "200 USD/noche",
    image: "/images/city-apartment.jpg"
  }
  // Agrega más propiedades según sea necesario
];

const PropertyList = () => {
  return (
    <div className="property-list">
      {properties.map(property => (
        <div key={property.id} className="property-card">
          <img src={property.image} alt={property.title} />
          <h3>{property.title}</h3>
          <p>{property.location}</p>
          <p>{property.price}</p>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
