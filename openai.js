/*
export const telegramBot = new Telegraf(process.env.BOT_TOKEN as string);

import * as dotenv from 'dotenv';
dotenv.config();
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);



async function createCompletionChatGTP(message: string) {
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      max_tokens: 1000,
      temperature: 0,
      messages: [{ role: 'user', content: message }]
    });
      return response.data.choices[0].message?.content as string;

  } catch (err) {
    console.log(
      '🚀 ~ file: openai.ts:20 ~ createCompletionChatGTP ~ err:',
      err
    );
    return err;
  }
}


import { telegramBot } from './bot/bot.js';
import * as dotenv from 'dotenv';
import openai from './lib/openai.js';


dotenv.config();

const port = process.env.PORT || 8000;
const host = process.env.HOST;
const token = process.env.BOT_TOKEN as string;
const local = `https://localhost:8000/`;
const url = `https://api.telegram.org/bot${token}/setWebhook?url=${local}`;





telegramBot.use(async (ctx, next) => {
  console.time('response time');
  await next();
  console.timeEnd('response time');
});

async function sendMsg(prompt: string) {
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      max_tokens: 1000,
      temperature: 0,
      messages: [{ role: 'user', content: prompt }]
    });
    return response.data.choices[0].message?.content as string;
  } catch (err) {
    console.log('🚀 ~ file: index.ts:51 ~ sendMsg ~ err:', err);
  }
}

telegramBot.on('text', (ctx) => {
  if (ctx.message) {
    const { text: prompt } = ctx.message;
    if (prompt) {
      const { id } = ctx.message.chat;
      sendMsg(prompt)
        .then((get) => {
          if (get) {
            ctx.telegram.sendMessage(id, `${get}`);
          }
        })
        .catch((err) => console.log(err));
    }
  }
});




export default openai;



*/
