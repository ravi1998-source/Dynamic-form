const mongoose = require('mongoose')


const signUpTemplate = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    storeChoice:{
        type:String,
        required:true
    },
    optionalField:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('test', signUpTemplate)