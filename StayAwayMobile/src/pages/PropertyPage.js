import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import api from '../services/api';

function PropertyPage({ route }) {
  const { id } = route.params;
  const [property, setProperty] = useState(null);

  useEffect(() => {
    api.get(`/properties/${id}`)
      .then(response => setProperty(response.data))
      .catch(error => console.error('Error fetching property:', error));
  }, [id]);

  if (!property) return <View><Text>Loading...</Text></View>;

  return (
    <View>
      <Text>{property.name}</Text>
      <Text>{property.description}</Text>
      <Text>${property.price} per night</Text>
      <Text>Location: {property.location}</Text>
      <Text>Available: {property.available ? 'Yes' : 'No'}</Text>
      <Image source={{ uri: property.images[0] }} style={{ width: '100%', height: 200 }} />
    </View>
  );
}

export default PropertyPage;
