var express = require ('express')
var app = express()
var mongoose = require('mongoose')
var cors = require('cors') 
const  bodyparser = require('body-parser')
const menurouter = require('./routes/menuroutes')
const userrouter = require('./routes/userroutes')
const adminrouter = require('./routes/adminroutes')


//app.use(bodyparser.json)
app.use(bodyparser.json())
app.use(cors()) 
app.use('/posts',menurouter)  
app.use('/adminsignup',adminrouter) 
app.use('/signup',userrouter) 
//app.use('/postdata',menurouter)
//app.use('/delete',menurouter)
//app.use('/modify',menurouter)


mongoose.connect('mongodb://127.0.0.1:27017',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if (!err){
        console.log("DB connected successfull")
    }
    else{
        console.log('not connected' + err)
    }
})

app.listen(3000,err=>{
    if(!err){
        console.log("App is Listening")
    }
    else{
        console.log("App crashed.....")
    }
})