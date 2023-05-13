const rateLimiter = require('express-rate-limit');

const limitRate = rateLimiter({
  max: 3,
  windowMS: 1000,
  message: `wait until ${new Date().getTime() / 100}`
});
module.exports = limitRate;
