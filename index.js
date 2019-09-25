const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const Fibonacci = require('./Fibonacci.js');
const Joseph = require('./Joseph.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/Fibonacci',Fibonacci);
app.use('/Joseph',Joseph);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8001, () => {
  console.log('示例程序正在监听 8001 端口！')
});