let mongoose = require('mongoose')

let adminSchema = new mongoose.Schema({
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


module.exports = mongoose.model('admindetails',adminSchema)