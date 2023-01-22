const { urlencoded } = require('express');
const colors = require('colors');
const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleWare');
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')

connectDB();

// initialize express server
const app = express();

app.use(express.json());
app.use(urlencoded({extended:false}));

app.use('/api/airbnb',require('./routes')); 

app.use(errorHandler); // overides default err handler

app.listen(port,() =>{
    console.log(`Server starting on port ${port}`)
})