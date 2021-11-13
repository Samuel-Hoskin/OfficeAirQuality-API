const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  maintainer_email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  joined_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Node', nodeSchema);