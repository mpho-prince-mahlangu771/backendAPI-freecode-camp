let express = require('express');
let app = express();
//loading the variable in the .env file
require('dotenv').config();
let bodyParser = require('body-parser');

/* 
#####################################################################
//to pass freecodecamp testcases enter: http://localhost:3000 
//order matters - if 1+ routes have same http method and route,
//then the first one is choosen always
#####################################################################
*/

//mounted body-parser middleware
app.use(bodyParser.urlencoded({extended: false}));

/* 
For every request,the middleware logs to the console a string taking the following format: method path - ip
an example would look like this: GET /json - ::ffff:127.0.0.1
*/
app.use((req,res,next) => {
    console.log(req.method + " " +  req.originalUrl + " - " + req.ip );
    next();
});


//serving a html file 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

//serving a plain string
app.get('/', (req, res) =>{
    res.send("Hello Express");
});

//Chaining Middleware to Create a Time Server
app.get('/now', (req,res,next) => {
    req.time = new Date().toString();
    next();
}, (req,res) => {
    res.send({time: req.time});
});

//Getting the Route Parameter Input from the Client
app.get('/:word/echo', (req, res) => {
    res.send({echo: req.params.word});
});

//Getting Query Parameters Input from the Client
//hit on browser: http://localhost:3000/name?first=mpho&last=mahlangu
app.get('/name', (req,res) => {
    res.send({name:  `${req.query.first} ${req.query.last}`})
});

//serving static assets
app.use('/public', express.static(__dirname + '/public'));




/*
//serving a json response
app.get('/json', (req, res) => {
    res.json({"message": "Hello json" })
});
*/

console.log(__dirname + '/public');





































 module.exports = app;
