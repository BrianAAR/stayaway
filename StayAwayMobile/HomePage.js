import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import api from '../services/api';

function HomePage({ navigation }) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    api.get('/properties')
      .then(response => setProperties(response.data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  return (
    <View>
      <Text>Available Properties</Text>
      <FlatList
        data={properties}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Property', { id: item._id })}>
            <View>
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>${item.price} per night</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default HomePage;
