const product = require("../model/productModel");
const ProductModel = require("../model/productModel");

const AddProduct = async (req, res) => {
  try {
    const { categoryId, productName, price } = req.body;
    const pro = await ProductModel.findOne({ productName: productName });

    if (!pro) {
      const data = await ProductModel.create({
        categoryId,
        productName,
        price
      })
      if(data){
        return res.status(201).send({
            success: true,
            message: "Product Added Successfully",
            product: data,
          });
      }
    } else {
      return res.status(500).send({
        success: false,
        message: "Product Already Exists",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};


const ViewProduct = async (req, res) => {
  try {
    const product = await ProductModel.find({}).populate('categoryId');
    if(product){
        return res.status(201).send({
            success: true,
            message: "All Products are Fatch",
            product: product,
          });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};




module.exports = {
    AddProduct,
    ViewProduct
}
