const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

// inorder for our server to render static files like images and css, we use special function of express
app.use(express.static("public"));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
})



app.listen(3000, function(){
    console.log("server running on port 3000");
})