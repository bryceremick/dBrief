const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Init App
const app = express();

app.listen(process.env.PORT || 8081, function () {
    console.log('server started');
  })