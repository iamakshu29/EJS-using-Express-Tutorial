// // include express module using require
// const express = require('express');
// const port = 8080;

// // express module has a funtion type name express which contain 
// // all commmands like .get .set .post .put etc...
// const app = express();


// // The below command is used to respond the particular res.send
// // in particular url for example '/profile' 

// // Like in node.js, there is no need to set content type as text/html as
// // it is pre defined

// // we can add .html using readFile in fs
// app.get('/profile',function(req,res){
//     res.send('<h1>cool its running</h1>');
// })

// app.get('/home',function(req,res){
//     res.send(`<ul> <li> hello </li> <li> hey </li> 
//     </ul>`)
// })


// app.listen(port,function(err) 
// {
//     if(err)
//     {
//         console.log("Error is running in the server" ,err);
//         return 0;
//     }
//     else
//     {
//         console.log("Server is running on port", port);
//     }
// })

// // here we use EJS to install it use npm install ejs
// // we can see the package we install in package.json file




// above code tells u how to include amd use express

// the below code tells u how to use template engine like ejs
// and pug (here we use ejs) using express

// include express module using require
const express = require('express');
//including another module for view engine
// we don't need to install as it is inbuilt
const path = require('path'); 
const port = 8080;

// express module has a funtion type name express which contain 
// all commmands like .get .set .post .put etc...
// if we didn't use any template engine just start from the 
// app.get line
const app = express();

// after install ing a template engine for example ejs
// we have to tell express that we r using a template engine
//so for this syntax is 
// view engine == template engine
app.set('view engine','ejs');
// for setting the views we need directory
// __dirname (we syudy it before) it gives the full directory path 
// nothing related to any of these....
app.set('views',path.join(__dirname,'Template Engine'));


// the below command is used to respond the particular res.send
// in particular url for example '/profile' 
// lie in node.js there is no need to set content type as text/html
// it is pre defined
// we can add .html using readFile in fs
app.get('/',function(req,res){
    return res.render('home',{title:"My First EJS"});
})

app.get('/practice',function(req,res)
{
    return res.render('practice',{title:'Welcome to Tutorial'});
})


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

// here we use EJS.   To install it use npm install ejs
// we can see the package we install in package.json file
