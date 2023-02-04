//require dependencies
const express = require("express")

//initialize the express app
const app = express()

//configure application settings
const port = 3000

const calc = []

//mount routes

app.get('/calc/:num1/:num2' ,  function(req, res){
	const num1 = parseInt(req.params.num1)
	const num2 = parseInt(req.params.num2)
	const sum = num1 + num2
	const phrase = `The sum is ${sum}`
	res.send(phrase)

})

app.get('/someroute',function(req, res){
    console.log("req.query: ", req.query)
    res.send("someroute accessed")
  })

app.get('/calcquery/:num1/:num2' ,  (req, res) => {
	const num1 = parseInt(req.params.num1)
	const num2 = parseInt(req.params.num2)
	const operation = req.query.operation

	if ( operation === 'add') {
		const sum = num1+num2
		res.send(`The sum is ${sum}`);
	}
	else if( operation === 'subtract'){
		const subtract = num1 - num2;
		res.send(`The answer is ${subtract}`)
	}
		else if( operation === 'multiply'){
		const multiply = num1 * num2;
		res.send(`The answer is ${multiply}`)
	}
	else if (operation === 'divide'){
		const divide = num1 / num2
		res.send(`The answe is ${divide}`)
	}
	else if (operation === 'exponents'){
		const exponents = Math.pow(num1,num2);
		res.send(`The answer is ${exponents}`)
	}
	else {
		res.send ('There is no operation')
	}

})


//tell the application to listen for requests on a dedicated port

app.listen(port, () => {
	console.log(`Express is listening on port ${port}`);
  })