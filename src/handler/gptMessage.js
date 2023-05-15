const asyncHandler = require('express-async-handler');
const Telegraf = require('telegraf');
const { openai } = require('../lib/chatGPT');
const webhookParams = require('../constant/constant');
require('dotenv').config();

const { baseURL, endResGpt } = webhookParams.module;

const bot = new Telegraf(process.env.BOT_TOKEN, { polling: true });

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
      messages: [{ role: 'user', content: prompt.payload }]
    });
    const completion = response.data.choices[0].message?.content;
    console.log('getMessage => ', completion);

    bot.telegram.sendMessage(prompt.chatID, completion);
    return;
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  sendMessage
};
