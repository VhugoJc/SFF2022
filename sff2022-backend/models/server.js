const express = require('express')
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('../db/config');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/user';
        this.authPath = '/api/auth';

        //Middleware
        this.middlewares();

        //app routes
        this.routes();

        //data base connection
        this.dataBaseConnection();
    }

    async dataBaseConnection(){
        await dbConnection();
    }

    middlewares(){
        // parse and read body
        this.app.use(express.json());
        //CORS
        this.app.use(cors());
        //public folders
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usersPath,require('../routes/user'));
        this.app.use(this.authPath,require('../routes/auth'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server Running in port ${this.port}`);
        })
    }
}


module.exports = Server