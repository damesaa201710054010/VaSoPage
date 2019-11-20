
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
var path = require('path');
const app = express();

app.set('port', process.env.PORT || 3001);

app.use(bodyParser.urlencoded(
    { extended:false }
));

app.use(cors());
app.use(express.json());

app.use('/api/coment', require('./routes/notes'));
app.use('/api/register', require('./routes/users'));
app.use('/api/login', require('./routes/views.routes'));
app.use('/api/products', require('./routes/connection'));


module.exports = app;
