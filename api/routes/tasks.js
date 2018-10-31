const express = require('express');
const router = express.Router();



let Task = require('../models/Task');

let tasksController = require('../controllers/TasksController');


router.route('/')

	.get(tasksController.index)

	.post(tasksController.create)

router.route('/newtask')

	.get(tasksController.newTask)

router.route('/:id')

	.get(tasksController.show)

	
module.exports = router;