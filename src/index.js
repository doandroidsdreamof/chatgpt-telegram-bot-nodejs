const express = require('express');
const logger = require('./middleware/logger');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(logger.requestMeasureLogger);

const port = process.env.PORT || 3000;
const host = process.env.HOST;

console.log('🚀 ~ file: index.js:9 ~ port:', port);

app.get('/', (req, res) => {
  res.send('test is works!');
});

app.listen(port, () => {
  console.log(`server works on ${port}`);
});
