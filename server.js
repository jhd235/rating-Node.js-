const express = require('express'); //this is the decalaration of the variable  express
const app = express();        //same for the app
app.listen(3000, () => {      //calling embedded "listen" method from Express and "=>" is from ECMAS6 
                              //   ()=> is equal to funtion() 
	console.log('Hello from Node.js')
	app.post('/quotes', (req, res) => {    //calling "post" method for Express app for "POST" - HTML form data submit
	console.log('Hello from Quotes')})     //
	app.get('/', (request, response) => {  //
	//response.send('Hello World')
	response.sendFile(__dirname + '/index.html')
	})
})
