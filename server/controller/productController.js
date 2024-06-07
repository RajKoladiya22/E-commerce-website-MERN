const ProductModel = require("../model/productModel");
const cloudinary = require("cloudinary").v2;

const AddProduct = async (req, res) => {
  try {
    const {
      categoryId,
      productName,
      productDiscription,
      productOfferPrice,
      productPrice,
      productStatus,
    } = req.body;
    const pro = await ProductModel.findOne({ productName: productName });

    if (!pro) {
      const img = await cloudinary.uploader.upload(req.file.path, {
        folder: "MERN_Products",
      });

      const data = await ProductModel.create({
        categoryId,
        productName,
        productDiscription,
        productOfferPrice,
        productPrice,
        productStatus,
        productImage: img.secure_url,
        ImagesPubligId: img.public_id,
      });
      if (data) {
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
    const product = await ProductModel.find({}).populate("categoryId");
    if (product) {
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

const DeleteProduct = async (req, res) => {
  try {
    const id = req.query.id;

    const img = await ProductModel.findById(id);

    await cloudinary.uploader.destroy(img.ImagesPubligId, {
      folder: "MERN_Products",
    });
    await ProductModel.findByIdAndDelete(id);

    return res.status(201).send({
      success: true,
      message: "Product Deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      err,
    });
  }
};

const UpdateProduct = async (req, res) => {
  try {
    const id = req.body.id;
    const {
      categoryId,
      productName,
      productDiscription,
      productOfferPrice,
      productPrice,
      productStatus,
    } = req.body;

    if (req.file) {
      const img = await cloudinary.uploader.upload(req.file.path, {
        folder: "MERN_Products",
      });
      const delImg = await ProductModel.findById(id);
      if (!delImg) {
        return res.status(404).send({
          success: false,
          message: "Product Not Found",
        });
      }
      await cloudinary.uploader.destroy(delImg.ImagesPubligId, {
        folder: "MERN_Products",
      });

      await ProductModel.findByIdAndUpdate(id, {
        categoryId: categoryId,
        productName: productName,
        productDiscription: productDiscription,
        productOfferPrice: productOfferPrice,
        productPrice: productPrice,
        productStatus: productStatus,
        productImage: img.secure_url,
        ImagesPubligId: img.public_id,
      });
      return res.status(201).send({
        success: true,
        message: "Product Updated",
      });
    } else {
      const img = await cloudinary.uploader.upload(req.file.path, {
        folder: "MERN_Products",
      });
      await ProductModel.findByIdAndUpdate(id, {
        categoryId: categoryId,
        productName: productName,
        productDiscription: productDiscription,
        productOfferPrice: productOfferPrice,
        productPrice: productPrice,
        productStatus: productStatus,
        productImage: img.secure_url,
        ImagesPubligId: img.public_id,
      });

      return res.status(201).send({
        success: true,
        message: "Product Updated",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      err,
    });
  }
};

module.exports = {
  AddProduct,
  ViewProduct,
  DeleteProduct,
  UpdateProduct,
};
