const express = require('express');

const routes = express.Router();
const verifyToken = require('../utils/auth');
const categoryController = require('../controller/categoryController')
const productController = require('../controller/productController')

//Category
routes.get('/api/v1/createCategory', categoryController.Addcategory);
//Product
routes.get('/api/v1/Products',verifyToken, productController.ViewProduct);



module.exports = routes;