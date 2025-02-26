const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017').on('open', () => {
    console.log('MONGO DB Connected');
}).on('error', () => {
    console.log("An error occur");
});

module.exports = connection;