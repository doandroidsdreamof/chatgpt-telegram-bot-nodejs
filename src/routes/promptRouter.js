const express = require('express');
const { sendMessage } = require('../handler/gptMessage');
const { handleMessage } = require('../handler/getMessage');

const router = express.Router();

router.post('/askToGpt', sendMessage);
router.get('/gptResponse', handleMessage);

module.exports = router;
