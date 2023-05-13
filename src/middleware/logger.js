const requestMeasureLogger = (req, res, next) => {
  const startHrTime = process.hrtime();
  console.info('request measure logger start');
  res.on('finish', () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    console.log('%s : %fms', req.path, elapsedTimeInMs);
    console.info('request measure logger end');
  });
  next();
};

module.exports = { requestMeasureLogger };
