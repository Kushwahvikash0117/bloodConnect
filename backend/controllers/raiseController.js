const Raise = require('../models/Raise');

exports.raise = async (req, res) => {
  try {
    const entry = new Raise(req.body);
    await entry.save();
    res.json({ message: 'Raised hand successfully' });
  } catch {
    res.status(500).json({ message: 'Error saving data' });
  }
};