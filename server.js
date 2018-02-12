const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.eventNames.PORT || 3030

const server = express();
server.use(cors());

server.get('/', (req, res) => {
  res.send(`Hello world from ${port}`);
});

server.post('/payload', (req, res) => {
  res.json(req.body);
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`Magic happening on ${port}`);
});