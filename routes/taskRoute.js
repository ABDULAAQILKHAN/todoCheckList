const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');

router.post("/trial",taskController.trial)
router.post("/addTask",taskController.addTask)
router.post("/editTask",taskController.editTask)
router.post("/deleteTask",taskController.deleteTask)


module.exports = router