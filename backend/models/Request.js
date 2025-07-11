const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  name: String,
  requiredBlood: String,
  location: String,
  urgency: String,
  contact: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Request', requestSchema);