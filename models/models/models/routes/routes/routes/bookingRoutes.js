const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Crear una nueva reserva
router.post('/bookings', async (req, res) => {
  const booking = new Booking(req.body);
  try {
    const newBooking = await booking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Obtener reservas de un usuario
router.get('/bookings/:userId', async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.params.userId });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
