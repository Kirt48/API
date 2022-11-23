const { Router } = require('express')
const {getProduct, postProduct, putProduct, deleteProduct,getProductById} = require('../controllers/product.controller')

const route = Router();

route.get('/', getProduct)
route.post('/', postProduct)
route.put('/:id', putProduct)
route.delete('/:id', deleteProduct)
route.get('/:id', getProductById)

module.exports = route;