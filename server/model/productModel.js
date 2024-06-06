const mongoose = require("mongoose");
const category = require("./categoryModel");

const ProductModel = mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
  },
  productName: {
    type: String,
    required: true,
  },
  productDiscription: {
    type: String,
    required: true,
  },
  productOfferPrice: {
    type: Number,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productStatus: {
    type: Number,
    default : 1
  },
  productImage : {
      type : String,
      required : true,
  },
  ImagesPubligId : {
      type : String,
      required : true,
  },

});

const product = mongoose.model("product", ProductModel);

module.exports = product;
