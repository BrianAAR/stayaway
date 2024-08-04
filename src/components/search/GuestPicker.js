import React, { useState } from 'react';

const GuestPicker = () => {
  const [guests, setGuests] = useState({ adults: 0, children: 0, infants: 0, pets: 0 });

  const handleGuestChange = (type, delta) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta)
    }));
  };

  return (
    <div className="guest-picker">
      {/* Aquí puedes agregar botones + y - para cada tipo de huésped */}
      <div>
        Adultos: {guests.adults}
        <button onClick={() => handleGuestChange('adults', 1)}>+</button>
        <button onClick={() => handleGuestChange('adults', -1)}>-</button>
      </div>
      <div>
        Niños: {guests.children}
        <button onClick={() => handleGuestChange('children', 1)}>+</button>
        <button onClick={() => handleGuestChange('children', -1)}>-</button>
      </div>
      <div>
        Infantes: {guests.infants}
        <button onClick={() => handleGuestChange('infants', 1)}>+</button>
        <button onClick={() => handleGuestChange('infants', -1)}>-</button>
      </div>
      <div>
        Mascotas: {guests.pets}
        <input type="number" value={guests.pets} onChange={(e) => handleGuestChange('pets', parseInt(e.target.value) - guests.pets)} />
      </div>
    </div>
  );
};

export default GuestPicker;
