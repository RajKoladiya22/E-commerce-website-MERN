const mongoose = require('mongoose');

const CategoryModel = mongoose.Schema({
    category : {
        type : String,
        required : true,
    },
    // icon : {
    //     type : String,
    //     required : true,
    // },
});

const category = mongoose.model('category', CategoryModel);

module.exports = category;