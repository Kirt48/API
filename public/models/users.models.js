const {Schema, model} = require('mongoose')

const UserModel = new Schema({
    identificacion : {
        type:String,
        required:["La identificacion es obligatoria"],
        unique : true
    },
    nombre : {
        type:String,
        required:["El nombre es obligatorio"]
    },
    apellido : {
        type:String,
        required:["El apellido es obligatorio"]
    },
    telefono : {
        type:Number,
        required:["El telefono es obligatorio"]
    },
    correo : {
        type:String,
        required:["El correo es obligatorio"],
        unique: true
    },
    contrasena : {
        type:String,
        required:["La contraseña es obligatoria"]
    },
    estado : {
        type:Boolean,
        default:true
    }
})

module.exports = model('user', UserModel)