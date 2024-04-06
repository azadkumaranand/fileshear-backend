require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

const cors = require('cors');

const connectDB = require('./config/db');


//cors middleware

const corsOptions = {
    origin: ['http://127.0.0.1:3001', 'http://127.0.0.1:3000', 'https://fileshear-backend.onrender.com']
}

app.use(cors(corsOptions));

//Templates
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static('public'))
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

app.listen(3000, ()=>{
    console.log("Listening on 3000")
})
// mIAY0a6u1ByJsWWZ

// module.exports = connectDB;