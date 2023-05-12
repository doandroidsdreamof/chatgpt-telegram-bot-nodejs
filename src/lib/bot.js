const Telegraf = require('telegraf');
require('dotenv').config();
const express = require('express');
const webhookParams = require('../constant/constant');

const initBot = () => {
  console.time('bot created');
  const bot = new Telegraf(process.env.BOT_TOKEN);
  console.timeEnd('bot created');
  return bot;
};

const bot = new Telegraf(process.env.BOT_TOKEN);

module.exports = bot;
