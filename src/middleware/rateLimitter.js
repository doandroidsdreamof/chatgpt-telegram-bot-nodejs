const rateLimiter = require('express-rate-limit');

const limitRate = rateLimiter({
  max: 5,
  windowMS: 10000,
  message: `wait until ${new Date().getTime() / 1000}`
});
module.exports = limitRate;
