const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const mongoose = require('mongoose');
const url = process.env.MONGODB_URI
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')
// MIDDLEWARES
app.use(cors());
app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.json());
// DB CONNCECTION
mongoose.connect(url,{useNewUrlParser:true}).then(() => {
    console.log(" DB connected....")
}).catch(err => {
    console.log(err);
    console.log("Not connected")
})



app.get('/',(req,res)=> {
    res.send("CRUD APPLICATION WITH NODE.JS")
})


const noteRoutes  = require('./Routes.js') 
app.use('/notes',noteRoutes)

// STARTING A SERVER
app.listen(process.env.PORT || 3001,() => {
    console.log(`listening on port ${process.env.PORT}`)  
})