
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
var path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded(
    { extended:false }
));

app.use(cors());
app.use(express.json());

app.use('/api/coment', require('./routes/coment'));
app.use('/api/register', require('./routes/register'));
app.use('/api/login', require('./routes/login'));
app.use('/api/products', require('./routes/products'));


module.exports = app;
