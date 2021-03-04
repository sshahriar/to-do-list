var express  = require('express' ) ; 
var app = express() ; 
var todoController = require('./controllers/todoController')  ; 

//setup templaste engine 
app.set('view engine' , ejs) ; 

// static files 
app.use(  express.static('./public')) ; 

app.get( '/' , function(req,res) {
    console.log("req made" + req.url ) ; 




}); 
// fire controllers 
todoController(app) ;  



app.listen(3002 ) ; 