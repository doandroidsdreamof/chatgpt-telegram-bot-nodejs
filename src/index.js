const express = require('express');
const Telegraf = require('telegraf');
const logger = require('./middleware/logger');
const limitRate = require('./middleware/rateLimitter');
const { initBot } = require('./lib/bot');
const webhookParams = require('./constant/constant');

const { url } = webhookParams.module;

require('dotenv').config();

const bot = initBot();

const app = express();

app.use(express.json());

app.use(logger.requestMeasureLogger);
app.use(limitRate);

if (process.env.NODE_ENV === 'production') {
  app.use(bot.webhookCallback(url));
}

const port = process.env.PORT || 3000;

bot.start((ctx) => ctx.reply('Welcome'));

app.get('/', (req, res) => {
  res.send('test is works!');
});

app.listen(port, () => {
  console.log(`server works on ${port}`);
});
