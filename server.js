//require dependencies
const express = require("express")

//initialize the express app
const app = express();

//configure application settings
const port = 3000;

//mount routes

app.get("/", function(req, res){
	res.send("Express Calculator")
});

app.get("/calcquery/:num1/:num2", function(req, res){  // calculator code
  const operator = req.params.operator
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  var result;

if (req.query.operation ==="add"){
	res.send( "Result is ${sum}");
} else if (req.query.operation === "subtract") {
	res.send("Result is ${difference}");
}if (req.query.operation ==="divide"){
	res.send( "Result is ${divide}");
} if (req.query.operation ==="multiply"){
	res.send( "Result is ${product}");
}if (req.query.operation ==="power"){
	res.send( "Result is ${power}");
}else {
	res.send ("no operation");
}

  function add(a, b){
		return a + b
	}

	function subtract(a, b){
		return a - b
	}

	function multiply(a, b){
		return a * b
	}

	function divide(a, b){
		return a / b
	}

	res.json(result);
});


//tell the application to listen for requests on a dedicated port

app.listen(port, function(){
  console.log(`Express is listening on port:` , port)
});