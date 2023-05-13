const asyncHandler = require('express-async-handler');
const { openai } = require('../lib/chatGPT');

const handleMessage = asyncHandler(async (req, res) => {
  const { data: prompt } = req.body;
  try {
    console.log('handleMessage && getMessage.js => ', req.body);
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  handleMessage
};
