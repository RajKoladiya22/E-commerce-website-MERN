const mongoose = require('mongoose');

const RegisterModel = mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    role:{
        type : String,
        required : true
    }
});

const register = mongoose.model('register', RegisterModel);

module.exports = register;