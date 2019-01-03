const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Init App
const app = express();

// Setup middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());


app.post('/', (req, res) => {
  console.log('test');
  res.send({
    message: 'success'
  });
});

app.listen(process.env.PORT || 8081, function () {
    console.log('server started');
  })