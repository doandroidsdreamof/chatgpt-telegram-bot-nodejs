const Telegraf = require('telegraf');
require('dotenv').config();
const webhookParams = require('../constant/constant');

const { url } = webhookParams.module;

const initBot = () => {
  console.time('bot created');
  if (process.env.NODE_ENV === 'development') {
    const bot = new Telegraf(process.env.BOT_TOKEN, { polling: true });
    bot.launch();
    return bot;
  }
  if (process.env.NODE_ENV === 'production') {
    const bot = new Telegraf(process.env.BOT_TOKEN);
    bot.telegram.setWebhook(url);
  }
  console.timeEnd('bot created');
};

module.exports = { initBot };
