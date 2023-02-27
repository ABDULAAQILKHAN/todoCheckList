//const express = require('express')
const mongoose = require("mongoose") 
//defining tasks schema

const taskSchema = new mongoose.Schema({
    task: {
        Date: Date,
        task: String
    }
})
const Tasks = new mongoose.model("Tasks", taskSchema);
mongoose.set('strictQuery', false);

module.exports = Tasks;