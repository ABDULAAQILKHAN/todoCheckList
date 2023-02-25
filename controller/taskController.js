const Model = require('../model/taskModel');

const trial = (req, res)=>{
    res.send({msg: "task trial"});
    console.log('trial')
}
const addTask = (req,res)=>{
    console.log("add task")
    /**
     * 
    let task = req.body.task;
    Model.updateOne({email: userdata.email},{$push:{
        tasks: task
    }},(err,done)=>{
        err?res.send(err):res.send(done)
    })
    */
}
const editTask = (req,res)=>{
    console.log("edit task")
}
const deleteTask = (req,res)=>{
    console.log("delete task")
}
module.exports = {
    trial,
    addTask,
    editTask,
    deleteTask
}