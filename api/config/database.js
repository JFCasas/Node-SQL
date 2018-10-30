var mysql = require("mysql");

var con = mysql.createConnection({
  
  host: "127.0.0.1",
  
  user: "root",
  
  password: "root", 

  database: "prueba"

});



 module.exports = {

	connect : ()=>{

		con.connect(function(err) {
		  
		  if (err) throw err;
		  console.log("Connected!");

		  con.query("CREATE DATABASE IF NOT EXISTS prueba", function (err, result) {
		    
		    if (err) throw err;
		    
		    console.log("Database prueba ready");
		  	
		  	var sql = "CREATE TABLE IF NOT EXISTS tasks (id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, description VARCHAR(255))";

		  	con.query(sql, function (err, result) {
	    		
	    		if (err) throw err;
	    		
	    		console.log("Table ready");
	  		});

		  });
		

		});

		
	},

	insert : (data)=>{

		
		//console.log(data)

		var sql = `INSERT INTO tasks (description) VALUES ("${data}")`

		//console.log(sql)
		
		con.query(sql, function (err, result) {
    		
    		if (err) throw err;
    		
    		console.log("Fila insertada");
  		  
  		});

		
	}

}


