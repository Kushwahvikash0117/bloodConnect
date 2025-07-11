const Raise = require('../models/Raise');

exports.search = async (req, res) => {
  const { location, bloodType } = req.query;
  const query = {};
  if (location) query.location = location;
  if (bloodType) query.bloodType = bloodType;
  const results = await Raise.find(query).sort({ date: -1 });
  res.json(results);
};