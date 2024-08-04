import React, { useEffect, useState } from 'react';
import api from '../services/api';

function PropertyPage({ match }) {
  const [property, setProperty] = useState(null);
  const propertyId = match.params.id;

  useEffect(() => {
    api.get(`/properties/${propertyId}`)
      .then(response => setProperty(response.data))
      .catch(error => console.error('Error fetching property:', error));
  }, [propertyId]);

  if (!property) return <div>Loading...</div>;

  return (
    <div>
      <h1>{property.name}</h1>
      <p>{property.description}</p>
      <p>${property.price} per night</p>
      <p>Location: {property.location}</p>
      <p>Available: {property.available ? 'Yes' : 'No'}</p>
      <img src={property.images[0]} alt={property.name} style={{ width: '100%' }} />
    </div>
  );
}

export default PropertyPage;
