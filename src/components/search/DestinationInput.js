import React, { useState } from 'react';

const DestinationInput = () => {
  const [destination, setDestination] = useState('');

  return (
    <div className="destination-input">
      <input
        type="text"
        placeholder="Destino"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
    </div>
  );
};

export default DestinationInput;
