const Model = require('../model/taskModel');

const trial = (req, res)=>{
    res.send({msg: "task trial"});
    console.log('trial')

}
const fetchtask = (req,res)=>{
    console.log("fetching task")
}
const addTask = (req,res)=>{
    let task = req.body.task;
    let saveTask = new Model({
        tasks: task
    })
    saveTask.save((saved,err)=>{
        saved?console.log(saved):console.log(err)
    })
}
const editTask = (req,res)=>{
    console.log("edit task")
}
const deleteTask = (req,res)=>{
    console.log("delete task")
}
module.exports = {
    trial,
    fetchtask,
    addTask,
    editTask,
    deleteTask
}