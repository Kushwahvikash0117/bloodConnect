const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { request, getAll } = require('../controllers/requestController');

router.post('/', auth, request);
router.get('/', getAll);

module.exports = router;