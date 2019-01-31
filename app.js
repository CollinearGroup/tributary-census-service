const express = require('express');
const app = express();
const request = require('request');
const cors = require('cors');

const ip = process.env.IP || 'localhost';
const port = process.env.PORT || 3005;
const controller = require('./controller');

app.use(cors())

app.get('/', controller.baseRoute);

app.get('/api/povertyRate', controller.povertyRate)

app.listen(port, function() {
  console.log(`App started running at ${ip}, port ${port}`);
});
