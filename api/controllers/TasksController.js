const Task = require('../models').Task;

function index(req,res){

	//Muestra las tareas

	Task.findAll().then(function(tasks){

		res.render('index',{tasks:tasks})

		console.log(tasks)
	})



}

function create(req,res){

	Task.create({description:req.body.description}).then((result)=>{

		//res.json(result)
		res.redirect('tasks')


	}).catch((err)=>{
		
		console.log(err)
		res.json(err)

	})
}

function newTask(req,res){

	res.render('newTask')
}

function show(req,res){

	Task.findOne({
  		where: {id: req.params.id},
  		attributes: ['id','description','createdAt']
	
	}).then((task)=>{

		res.render('showTask',{task:task})
	
	}).catch((err)=>{

		console.log(err)
	})
}

module.exports = {
	
	index:index,
	create: create,
	newTask: newTask,
	show:show

}

