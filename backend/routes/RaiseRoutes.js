const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { raise } = require('../controllers/raiseController');

router.post('/', auth, raise);

module.exports = router;