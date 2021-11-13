const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    
  },
  temperature: {
    type: Number,
    required: true,
  },
  pressure:{
    type: Number,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },
  light: {
    type: Number,
    required: true,
  },
  reducing: {
    type: Number,
    required: true,
  },
  oxidising: {
    type: Number,
    required: true,
  },
  nh3: {
    type: Number,
    required: true,
  },
  PM1: {
    type: Number,
    required: true,
  },
  PM25: {
    type: Number,
    required: true,
  },
  PM10: {
    type: Number,
    required: true,
  },


});

module.exports = mongoose.model('data', dataSchema);