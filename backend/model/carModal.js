const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  fuel: {
    type: String,
    required: true,
    
  },
  images: {
    type: [String],
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  km_driven: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  ad_title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;