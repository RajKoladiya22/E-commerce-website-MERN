const express = require('express');
const multer = require('multer')

const routes = express.Router();
const verifyToken = require('../utils/auth');
const categoryController = require('../controller/categoryController')
const productController = require('../controller/productController')


const storage = multer.diskStorage({});

const upload = multer({ storage }).single('productImage');

//Category

//Product
routes.put('/api/v1/UpdateProduct', upload, productController.UpdateProduct);



module.exports = routes;