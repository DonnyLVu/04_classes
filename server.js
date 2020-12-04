const { Stack } = require('./Stack.js')
const express = require('express');
const app = express();

app.use(express.json());

app.post('/lint', (req, res) => {
  res.send('Lint');
});

app.listen(3333, () => {
  console.log('started on port "3333"');
});