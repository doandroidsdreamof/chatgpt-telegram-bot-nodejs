const express = require('express');
const Telegraf = require('telegraf');
const logger = require('./middleware/logger');
const limitRate = require('./middleware/rateLimitter');
const bot = require('./lib/bot');
const webhookParams = require('./constant/constant');

const { locale, url, token, urlInfo } = webhookParams.module;
console.log("🚀 ~ file: index.js:9 ~ url:", url)

require('dotenv').config();

const app = express();

app.use(express.json());

app.use(logger.requestMeasureLogger);
app.use(limitRate);
app.use(bot.webhookCallback(url));

bot.telegram.setWebhook(url);

const port = process.env.PORT || 3000;
const host = process.env.HOST;

app.get('/', (req, res) => {

  res.send('test is works!');
});

app.listen(port, () => {
  console.log(`server works on ${port}`);
});
