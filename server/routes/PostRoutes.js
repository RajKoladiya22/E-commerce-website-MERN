const express = require('express');
const multer = require('multer')

const routes = express.Router();
const verifyToken = require('../utils/auth');
const categoryController = require('../controller/categoryController')
const productController = require('../controller/productController')


const storage = multer.diskStorage({});

const upload = multer({ storage }).single('productImage');
const uploadFile = multer({ storage }).single('icon');

//Category
routes.post('/api/v1/createCategory',verifyToken, uploadFile, categoryController.Addcategory);
//Product
routes.post('/api/v1/addProduct',verifyToken, upload, productController.AddProduct);



module.exports = routes;