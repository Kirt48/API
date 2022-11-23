const express = require('express')
const app = express()

const cors = require('cors')
const { DBConnection } = require('../public/db/config')

class Server{

    constructor(){
        this.app = express()
        this.port = process.env.PORT

        this.DbConnectionMongo()

        this.middleware()

        this.routes()
    }

    DbConnectionMongo(){
        DBConnection()
    }

    middleware(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use('/api/products/', require('../public/routes/products.routes'))
        this.app.use('/api/users/', require('../public/routes/users.routes'))
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log("Servidor corriendo en: http:localhost:"+this.port);
        })
    }


}
module.exports=Server