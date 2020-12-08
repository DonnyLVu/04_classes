const { linter } = require('./Linter.js')
const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/v1/lint', (req, res) => {
  const result = linter(req.body.lint)
  res.send(result);;
});

app.listen(3333, () => {
  console.log('started on port "3333"');
});