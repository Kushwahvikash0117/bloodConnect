const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  role: String,
  verified: { type: Boolean, default: false },
  googleId: String
});

module.exports = mongoose.model('User', userSchema);
