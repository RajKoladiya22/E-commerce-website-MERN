const express = require('express');
const multer = require('multer')

const routes = express.Router();
const verifyToken = require('../utils/auth');
const categoryController = require('../controller/categoryController')
const productController = require('../controller/productController')




//Category
routes.delete('/api/v1/DeleteCategory', categoryController.DeleteCategory);

//Product
routes.delete('/api/v1/DeleteProduct', productController.DeleteProduct);



module.exports = routes;