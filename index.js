const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const Fibonacci = require('./Fibonacci.js');
const Joseph = require('./Joseph.js');
const BFF = require('./BFF.js')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/Fibonacci',Fibonacci);
app.use('/Joseph',Joseph);
app.use('/bff',BFF)

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8001, () => {
  console.log('Listening 8001 port!')
});