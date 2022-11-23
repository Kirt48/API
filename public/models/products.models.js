const{Schema, model} = require('mongoose')

const ProductModel = new Schema({
    nombre:{
        type:String,
        required:["El nombre es obligatorio"]
    },
    precio:{
        type:Number,
        required:["El precio es obligatorio"]
    },
    lote:{
        type:Number,
        required:["El lote es obligatorio"]
    },
    fechaDeIngreso:{
        type:String,
        required:["La fecha es obligatoria"]
    },
    estado:{
        type:Boolean,
        default:true
    }
})

module.exports = model('product', ProductModel)