let mongoose = require('mongoose')

let menuSchema = new mongoose.Schema({
    itemname : {
        type:String,
    },
    category : {
        type:String,
    },
    price : {
        type:Number,
    },
    availability : {
        type:String,
    }
}) 


module.exports = mongoose.model('menudetails',menuSchema)