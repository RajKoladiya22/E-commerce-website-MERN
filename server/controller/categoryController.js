const CategoryModel = require("../model/categoryModel");

const Addcategory = async (req, res) => {
  try {
    const { category } = req.body;
    console.log(category);

    const cat = await CategoryModel.findOne({ category: category });

    if (!cat) {
      data = await CategoryModel.create({
        category
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

module.exports={
    Addcategory,
}
