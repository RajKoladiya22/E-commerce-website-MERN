const CategoryModel = require("../model/categoryModel");
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
    console.log(category);

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

module.exports = {
  Viewegory,
  Addcategory,
};
