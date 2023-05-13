const asyncHandler = require('express-async-handler');
const { openai } = require('../lib/chatGPT');
const webhookParams = require('../constant/constant');
const { postRequest } = require('../lib/postRequest');

const { baseURL, endResGpt } = webhookParams.module;

const sendMessage = asyncHandler(async (req, res) => {
  const { data: prompt } = req.body;
  try {
    if (prompt == null) {
      throw new Error('prompt empty');
    }
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      temperature: 0,
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }]
    });
    const completion = response.data.choices[0].message?.content;
    console.log('getMessage => ', completion);
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  sendMessage
};
