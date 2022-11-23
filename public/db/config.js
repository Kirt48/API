const mongoose = require('mongoose')

const DBConnection = async () =>{
    try{
        mongoose.connect(process.env.MONGODB_CNN)
        console.log("Conexion exitosa");
    } catch (error){ 
        console.log("Error de conexion: "+error);
    }
}

module.exports = {
    DBConnection
}