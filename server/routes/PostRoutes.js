const express = require('express');

const routes = express.Router();
const verifyToken = require('../utils/auth');
const categoryController = require('../controller/categoryController')
const productController = require('../controller/productController')

//Category
routes.post('/api/v1/createCategory', categoryController.Addcategory);
//Product
routes.post('/api/v1/addProduct', productController.AddProduct);



module.exports = routes;