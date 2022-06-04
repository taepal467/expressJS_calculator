const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));


//Addition
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post('/', (req, res) => {
  let addNum1 = Number(req.body.addNum1);
  let addNum2 = Number(req.body.addNum2);
  let sum = addNum1 + addNum2;
  res.send(`${addNum1} + ${addNum2} = ${sum}`);
})

//Subtraction
app.get('/subtract', (req, res) => {
  res.sendFile(__dirname + "/subtraction.html");
})

app.post('/subtract', (req, res) => {
  let subNum1 = Number(req.body.subNum1);
  let subNum2 = Number(req.body.subNum2);
  let subtract = subNum1 - subNum2;
  res.send(`${subNum1} - ${subNum2} = ${subtract}`);
})

//Multiplication
app.get('/multiplication', (req, res) => {
  res.sendFile(__dirname + "/multiply.html");
})

app.post('/multiplication', (req, res) => {
  let multiNum1 = Number(req.body.multiNum1);
  let multiNum2 = Number(req.body.multiNum2);
  let multiply = multiNum1 * multiNum2;
  res.send(`${multiNum1} x ${multiNum2} = ${multiply}`);
})

//Division
app.get('/divide', (req, res) => {
  res.sendFile(__dirname + "/divide.html");
})

app.post('/divide', (req, res) => {
  let divNum1 = Number(req.body.divNum1);
  let divNum2 = Number(req.body.divNum2);
  let divide = divNum1 / divNum2;
  res.send(`${divNum1} / ${divNum2} = ${divide}`);
})

//Exponent
app.get('/power', (req, res) => {
  res.sendFile(__dirname + "/exponent.html");
})

app.post('/power', (req, res) => {
  let powNum1 = Number(req.body.powNum1);
  let powNum2 = Number(req.body.powNum2);
  let power = Math.pow(powNum1, powNum2);
  res.send(`${powNum1} ^ ${powNum2} = ${power}`);
})

app.listen(port, () => {
  console.log(`Calculator app listening on port ${port}`);
})