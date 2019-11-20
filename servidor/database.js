const mongoose = require('mongoose');

const URI = process.env.MONGOOSE_URI
    ? process.env.MONGOOSE_URI
    : 'mongodb://localhost/vaso';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});


const mongoConnection = mongoose.connection;

mongoConnection.once('open', () => {
    console.log('Mongo Database is connected');
});

module.exports = mongoConnection;