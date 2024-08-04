const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, enum: ['house', 'hotel'], required: true },
  available: { type: Boolean, default: true },
  images: [String], // Array of image URLs
});

module.exports = mongoose.model('Property', PropertySchema);
