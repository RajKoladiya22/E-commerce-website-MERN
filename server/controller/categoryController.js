const CategoryModel = require("../model/categoryModel");
const ProductModel = require("../model/productModel")
const cloudinary = require("cloudinary").v2;

const Viewegory = async (req, res) => {
  try {
    const category = await CategoryModel.find({});

    if (category) {
      return res.status(201).send({
        success: true,
        message: "Category Fatch",
        category,
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

const Addcategory = async (req, res) => {
  try {
    const { category, status } = req.body;

    const cat = await CategoryModel.findOne({ category: category });

    if (!cat) {
      const img = await cloudinary.uploader.upload(req.file.path, {
        folder: "MERN_Category",
      });
      data = await CategoryModel.create({
        category,
        status,
        icon: img.secure_url,
        IconPubligId: img.public_id,
      });
      if (data) {
        return res.status(201).send({
          success: true,
          message: "Category Added Successfully",
          category: data,
        });
      }
    } else {
      return res.status(500).send({
        success: false,
        message: "Category Already Exists",
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

const DeleteCategory = async (req, res) => {
  try {
    const id = req.query.id || req.body.id;

    const img = await CategoryModel.findById(id);

    await cloudinary.uploader.destroy(img.IconPubligId, {
      folder: "MERN_Category",
    });
    await CategoryModel.findByIdAndDelete(id);
   
    const products = await ProductModel.find({ categoryId: id });

    for (const product of products) {
      await cloudinary.uploader.destroy(product.ImagesPubligId, {
        folder: "MERN_Products",
      });
    }

    await ProductModel.deleteMany({ categoryId: id });

    return res.status(201).send({
      success: true,
      message: "Category and associated products deleted",
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

module.exports = {
  Viewegory,
  Addcategory,
  DeleteCategory,
};
