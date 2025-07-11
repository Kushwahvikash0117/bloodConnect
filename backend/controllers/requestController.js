const Request = require('../models/Request');

exports.request = async (req, res) => {
  try {
    const entry = new Request(req.body);
    await entry.save();
    res.json({ message: 'Request submitted' });
  } catch {
    res.status(500).json({ message: 'Error submitting request' });
  }
};

exports.getAll = async (req, res) => {
  const data = await Request.find().sort({ date: -1 });
  res.json(data);
};