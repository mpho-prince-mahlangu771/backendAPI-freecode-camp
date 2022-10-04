let express = require('express');
let app = express();

//order matters - if 1+ routes have same http method and route,
//then the first one is choosen always


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

console.log(__dirname + '/public');





































 module.exports = app;
