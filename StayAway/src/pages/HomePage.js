import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

function HomePage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    api.get('/properties')
      .then(response => setProperties(response.data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  return (
    <div>
      <h1>Available Properties</h1>
      <ul>
        {properties.map(property => (
          <li key={property._id}>
            <h2>{property.name}</h2>
            <p>{property.description}</p>
            <p>${property.price} per night</p>
            <Link to={`/property/${property._id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
