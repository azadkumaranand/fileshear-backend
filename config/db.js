require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.Mongodb_connect_url, { useNewUrlParser: true, useUnifiedTopology: true,}).then(() => {
        console.log('Database connected 🥳🥳🥳🥳');
    }).catch((err) => {
        console.log('Connection failed ☹️☹️☹️☹️');
    });
    const connection = mongoose.connection;

// module.exports = connectDB;