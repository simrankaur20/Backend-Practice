const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

// inorder for our server to render static files like images and css, we use special function of express
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
})


app.post("/" , function(req,res){
    var firstname = req.body.fName;
    var lastName = req.body,lNmae;
    var email = req.body.email;

    console.log(firstname, lastName, email);
})

app.listen(3000, function(){
    console.log("server running on port 3000");
})


//5be5e116effb7976fc1d041738f95d5b-us20


// List id
//7c8e17aab3