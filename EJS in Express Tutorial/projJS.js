// the below code tells u how to use template engine like EJS
// and pug (here we use EJS) using Express

// include express module using require
const express = require('express');

//including another module for view engine
// we don't need to install, as it is inbuilt
const path = require('path'); 

// set a port number
const port = 8080;

// express module has a funtion name --> express <-- which contain 
// all commmands like .get .set .post .put etc...
const app = express();

// after installing a template engine for example ejs
// we have to tell express that we are using a template engine,
// so for this. The syntax is (template engine and view engine both are similar)
// but in syntax we have to use view coz its predefined
app.set('view engine','ejs');

// for setting the .ejs files where we get the data we need directory
// __dirname (it gives the full directory path)
app.set('views',path.join(__dirname,'Template Engine'));


// using app.get we render the .ejs files to browser
// app.get includes two arguements
// 1. url (content writtena fter port) 2. call back function which contains
// another 2 args request(req) and respond(res)...
app.get('/',function(req,res){
    return res.render('home',{title:"My First EJS"}); //here res.render contain two args the .ejs file name and the variable (if any)
})

// here we change the URL to get the another .ejs file..
app.get('/practice',function(req,res)
{
    return res.render('practice',{title:'Welcome to Tutorial'});
})

// app.listen checks if there is any error in running the server
// if its is it get console in terminal
app.listen(port,function(err) 
{
    if(err)
    {
        console.log("Error is running in the server" ,err);
        return 0;
    }
    else
    {   
        console.log("Server is running on port", port);
    }
})


// To show first run the cmnd node projJS.js in terminal
// then in browser write localhost:8080  to view home.ejs file
// and localhost:8080/practice to view practice.ejs file

// NOTE :- How to install EJS template engine
// use cmnd npm init to make json file
//then
// To install EJS type    npm install ejs
// You can see the package we install in package.json file
