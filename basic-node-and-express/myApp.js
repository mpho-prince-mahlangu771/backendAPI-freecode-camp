let express = require('express');
let app = express();

//hit http://localhost:3000/ on a browser
app.get('/', (req, res) =>{
    res.send("Hello Express");
});

console.log("Hello World");





































 module.exports = app;
