const bcryptjs = require('bcryptjs')
const User = require('../models/users.models')

const getUser = async (req, res) => {

    const allUsers = await User.find();

    res.send({
        "ok" : 200,
        allUsers
    })
}
const postUser = async (req, res) => {
    
    const { identificacion, nombre, apellido, telefono, correo, contrasena } = req.body;
    const user = new User({identificacion, nombre, apellido, telefono, correo, contrasena})

    user.contrasena = bcryptjs.hashSync(contrasena, 15)

    await user.save()


    res.send({
        "ok" : 200,
        user
    })
}

const putUser = async (req, res) => {
    
    const paramts = req.params.id;
    const { identificacion, nombre, apellidos, telefono, usuario, contrasena } = req.body;
    
    const userUpdate = await User.findByIdAndUpdate(paramts,{ identificacion, nombre, apellidos, telefono, usuario, contrasena })

    res.send({
        "ok" : 200,
        "msg" : "Usuario actualizado correctamente"
    })
}
const deleteUser = async (req, res) => {
    
    const id = req.params.id
    const estado = false;

    const userUpdate = await User.findByIdAndUpdate(id, {estado})

    res.send({
        "ok" : 200,
        "msg" : "Usuario eliminado correctamente"
    })
}


module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
}