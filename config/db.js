require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://azadanand9798:Mxz22U7YoRRagAWm@cluster0.b6hzirm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true,}).then(() => {
        console.log('Database connected 🥳🥳🥳🥳');
    }).catch((err) => {
        console.log('Connection failed ☹️☹️☹️☹️');
    });
    const connection = mongoose.connection;

// module.exports = connectDB;