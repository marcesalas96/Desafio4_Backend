const { Router } = require('express')
const router = Router()
//Controllers
const getAllProducts = require('../controllers/getAllProducts')
const getProductById = require('../controllers/getProductById')
const addNewProduct = require('../controllers/addNewProduct')
const updateProductById = require('../controllers/updateProductById')
const deleteProductById = require('../controllers/deleteProductById')

router.get('/', getAllProducts);
router.get('/:id',getProductById);
router.post('/', addNewProduct);
router.put('/:id', updateProductById);
router.delete('/:id', deleteProductById);


module.exports = router