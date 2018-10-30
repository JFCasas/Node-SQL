var createError = require('http-errors');
var express = require('express');
var path = require('path');

var logger = require('morgan');

//var db = require("./config/database");

//db.connect();

/*const Sequelize = require('sequelize')

const sequelize = new Sequelize('prueba','root','root',{

  host : '127.0.0.1',
  
  dialect: 'mysql'

});*/



var app = express();

// view engine setup


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "pug")

app.use(express.static(path.join(__dirname, 'public')));


app.get('/',function(req,res){

	res.render('index')

})

/*app.post('/',function(req,res){

	//res.json(req.body.name)

  db.insert(req.body.description);

  //console.log(req.body.description)

  res.send("La fila ha sido insertada")

})*/





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(err)
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err)
});

module.exports = app;
