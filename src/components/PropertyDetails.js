import React from 'react';
import { useParams } from 'react-router-dom';
import './PropertyDetails.css';

const properties = [
  {
    id: 1,
    title: 'Casa de lujo en la playa',
    location: 'Cancún, México',
    price: '3500 MXN por noche',
    image: '/path-to-image1.jpg',
    description: 'Esta es una hermosa casa de lujo ubicada en la playa.',
  },
  {
    id: 2,
    title: 'Apartamento moderno en el centro',
    location: 'Ciudad de México, México',
    price: '1500 MXN por noche',
    image: '/path-to-image2.jpg',
    description: 'Este apartamento moderno está ubicado en el corazón de la ciudad.',
  },
  // Agrega más propiedades según sea necesario
];

function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((prop) => prop.id === parseInt(id));

  if (!property) {
    return <div>Propiedad no encontrada</div>;
  }

  return (
    <div className="property-details">
      <img src={property.image} alt={property.title} />
      <h2>{property.title}</h2>
      <p>{property.location}</p>
      <p>{property.price}</p>
      <p>{property.description}</p>
    </div>
  );
}

export default PropertyDetails;
