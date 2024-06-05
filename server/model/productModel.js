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
  price: {
    type: String,
    required: true,
  },
//   icon : {
//       type : String,
//       required : true,
//   },
});

const product = mongoose.model("product", ProductModel);

module.exports = product;
