const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv") ;
dotenv.config()

const userconnect = (type)=>{

    mongoose.connect(process.env.DBCON, {
        useNewUrlParser: true,
        useUnifiedtopology: true
    }, (err,done)=>{
        if(err){
            console.log(type + err)
        }
        else{
            console.log(type+" DB connected");
    
        }
    })

}
module.exports = {userconnect}