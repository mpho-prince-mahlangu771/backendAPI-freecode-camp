//loading the variable in the .env file
require('dotenv').config()
let express = require('express');
let app = express();

//order matters - if 1+ routes have same http method and route,
//then the first one is choosen always

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
