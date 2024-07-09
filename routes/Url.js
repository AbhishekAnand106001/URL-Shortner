const express = require('express');
const { handleGenerateNewShortURL } = require('../controllers/URL');

const router = express.Router();

router.post('/', handleGenerateNewShortURL);

module.exports = router;