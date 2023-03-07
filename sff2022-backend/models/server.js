const express = require('express')
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('../db/config');
const { socketController } = require('../socket/socketController');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/user';
        this.authPath = '/api/auth';
        this.teamPath = '/api/team';
        this.presalePath = '/api/presale';
        this.salePath = '/api/sale';
        this.product = '/api/product';

        this.dashboard = '/api/dashboard';

        //socket config:
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server); //info sockets

        //Middleware
        this.middlewares();

        //app routes
        this.routes();

        //data base connection
        this.dataBaseConnection();

        //socket events
        this.sockets();


    }

    async dataBaseConnection() {
        await dbConnection();
    }

    middlewares() {
        // parse and read body
        this.app.use(express.json());
        //CORS
        this.app.use(cors());
        //public folders
        this.app.use(express.static('public', { extensions: ['html'] })); //{ extensions: ['html'] }: Delete html extension on url
        this.app.use('/uploads', express.static('uploads')); //images
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user'));
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.teamPath, require('../routes/team'));
        this.app.use(this.presalePath, require('../routes/presale'));
        this.app.use(this.salePath, require('../routes/sale'));
        this.app.use(this.product, require('../routes/product'));
        
        this.app.use(this.dashboard, require('../routes/dashboard'));
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Server Running in port ${this.port}`);
        });
        
    }

    sockets(){
        this.io.on('connection', socket => {
            socketController(socket);
        });
    }
}


module.exports = Server