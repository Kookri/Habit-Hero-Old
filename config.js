// config.js
module.exports = {
  jwtSecret: '4WDk2HgiJq3P3m',
  corsOptions: {
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
  },
  mongodbURI: 'mongodb://127.0.0.1:27017/habit-hero',
  port: 5000
};

  