const mongoose = require('mongoose');

const raiseSchema = new mongoose.Schema({
  name: String,
  bloodType: String,
  location: String,
  contact: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Raise', raiseSchema);