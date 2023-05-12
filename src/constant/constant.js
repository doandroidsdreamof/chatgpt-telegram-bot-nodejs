require('dotenv').config();

const token = process.env.BOT_TOKEN;
const locale = `https://b33e-78-179-107-134.ngrok-free.app`;
const url = `https://api.telegram.org/bot${token}/setWebhook?url=${locale}
`;
const urlInfo = `https://api.telegram.org/bot${token}/getWebhookInfo`;

exports.module = {
  locale,
  token,
  url,
  urlInfo
};
