const express = require('express');
const path = require('path');

const messages = [];

const app = express();

app.use(express.static(path.join(__dirname, '/client')));

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});