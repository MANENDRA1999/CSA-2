let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    firstname : {
        type:String,
    },
    lastname : {
        type:String,
    },
    email : {
        type:String,
    },
    mobile : {
        type:Number,
    },
    password : {
        type:String
    }
}) 


module.exports = mongoose.model('userdetails',userSchema)