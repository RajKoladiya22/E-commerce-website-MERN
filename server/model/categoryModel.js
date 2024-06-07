const mongoose = require('mongoose');

const CategoryModel = mongoose.Schema({
    category : {
        type : String,
        required : true,
    },
    status : {
        type : Number,
        default : 1,
    },
    icon : {
        type : String,
        required : true,
    },
    IconPubligId : {
        type : String,
        required : true,
    },
});

const category = mongoose.model('category', CategoryModel);

module.exports = category;