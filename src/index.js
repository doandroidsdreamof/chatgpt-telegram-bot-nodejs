const express = require('express');
const cors = require('cors');
const { requestMeasureLogger } = require('./middleware/logger');
const limitRate = require('./middleware/rateLimitter');
const { initBot } = require('./lib/bot');
const webhookParams = require('./constant/constant');
const promptRouter = require('./routes/promptRouter');

const { url } = webhookParams.module;

require('dotenv').config();

const bot = initBot();

const app = express();

app.use(express.json());
app.use(cors());
app.use(requestMeasureLogger);
app.use(requestMeasureLogger, limitRate);
app.use(requestMeasureLogger, promptRouter);

if (process.env.NODE_ENV === 'production') {
  bot.telegram.setWebhook(url);
  app.use(bot.webhookCallback(url));
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server works on ${port}`);
});
