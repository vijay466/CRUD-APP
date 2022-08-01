const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const mongoose = require('mongoose');
const url = process.env.MONGODB_URI
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));
const cookieParser = require('cookie-parser')



mongoose.connect(url,{useNewUrlParser:true}).then(() => {
    console.log("connected....")
}).catch(err => {
    console.log(err);
    console.log("Not connected")
})
app.use(cors());
app.use(cookieParser())
app.use(bodyParser())
app.use(express.json());
app.use(express.urlencoded({
extended:true
}));
const noterequsts  = require('./controller.js')
app.use('/notes',noterequsts)

app.listen(process.env.PORT || 3001,() => {
    console.log(`listening on port ${process.env.PORT}`)  
})