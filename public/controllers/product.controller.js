const Product = require('../models/products.models');

const getProduct = async (req, res) =>{
    const allProducts = await Product.find();

    res.send({
        "ok" : 200,
        allProducts
    })
}

const postProduct = async (req, res) => { 
    const {nombre, precio, lote, fechaDeIngreso} = req.body
    const product = new Product({nombre, precio, lote, fechaDeIngreso})

    await product.save();

    res.send({
        "ok" : 200,
        product
    })
}

const putProduct = async (req, res) =>{
    const paramts = req.params.id;

    const {nombre, precio, lote, fechaDeIngreso} = req.body

    const productUpdate = await Product.findByIdAndUpdate(paramts, {nombre, precio, lote, fechaDeIngreso})

    res.send({
        "ok" : 200,
        "msg" : "Usuario actualizado correctamente"
    })
}

const deleteProduct = async (req, res) =>{
    
    const idProduct = req.params.id
    const estado = false
    const productUpdate = await Product.findByIdAndUpdate(idProduct, {estado})

    res.send({
        "ok" : 200,
        "msg" : "Producto eliminado"
    })
}

const getProductById = async (req, res) =>{
    const id = req.params.id
    const product = await Product.find({_id: id})

    res.send({
        "ok" : 200,
        product
    })
}


module.exports ={
    getProduct,
    postProduct,
    putProduct,
    deleteProduct,
    getProductById
}