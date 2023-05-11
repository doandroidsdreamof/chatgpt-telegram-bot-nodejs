const requestMeasureLogger = (req, res, next) => {
  const startHrTime = process.hrtime();
  res.on('finish', () => {
    console.log('response => ', req.body);
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    console.log('%s : %fms', req.path, elapsedTimeInMs);
  });
  next();
};

module.exports = { requestMeasureLogger };
