const Telegraf = require('telegraf');
require('dotenv').config();
const webhookParams = require('../constant/constant');
const { postRequest } = require('./postRequest');

const { baseURL, endAskGpt } = webhookParams.module;


const initBot = () => {
  console.time('bot created');
  let polling = true;
  const bot = new Telegraf(process.env.BOT_TOKEN, { polling });
  if (process.env.NODE_ENV === 'development') {
    bot.catch((err, ctx) => {
      console.log(`bot err encountered => ${ctx.updateType}`, err);
    });
    bot.use(async (ctx, next) => {
      try {
        const start = new Date();
        await next();
        const ms = new Date() - start;
        console.log('Bot response time: %sms', ms);
      } catch (err) {
        console.log('bot logger err =>:', err);
      }
    });
    bot.start((ctx) => ctx.reply(`hi ${ctx.message.from.username}`));
    bot.on('text', (ctx) => {
      console.info(`bot handle msg && bot.js =>`, ctx.message.text);
      const { text } = ctx.message;
      const chatID = ctx.chat.id;
      if (text != null) {
        postRequest(baseURL, endAskGpt, text, chatID).catch((err) => console.log(err));
      }
    });
    bot.launch();
  } else if (process.env.NODE_ENV === 'production') {
    polling = false;
  }
  console.timeEnd('bot created');
  return bot;
};

module.exports = { initBot };
