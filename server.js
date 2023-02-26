//importing libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//import modules and files
const connect = require('./db');
const trial = require('./routes/taskRoute');

const server = express();
server.use(cors());
mongoose.set('strictQuery', false);
server.use(express.json());
server.use(express.json());
server.use (express.urlencoded({
    extended: true
}));
connect.userconnect("Main")

//Routes
server.use(trial)
/**
 * 
server.get('/*',(req,res)=>{
    res.sendFile()
})
*/
const port = process.env.PORT || 5000;
server.listen(port, () =>{
    console.log('Running')    
})

