const express = require('express');
const app = express();

var listen = "Luis";
app.use(express.static('public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
    console.log(`Hello ${listen}`);
});