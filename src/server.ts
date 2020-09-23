import express = require('express');
import { createServer, Server } from 'http';
import * as SocketIO from 'socket.io';

import routes  from './routes';

class server {

    public app: express.Application
    public server: Server;
    private io: SocketIO.Server;
    
    constructor(){
        this.serv();
        this.rotas();
       //this.sockets();
    }

    public rotas(){
        this.app.use(routes)
    }

    private sockets(): void {
        this.server = createServer(this.app);
        this.io = SocketIO(this.server)
    }

    public serv() {
            //inicialização do express
        try{
            this.app = express()
            this.app.listen(8080)
            console.log('servidor conectado na porta 8080')
        }catch(error){
            console.log('Não foi possivel conectar ao servidor Express', error)
        }
            //inicialização do socket.io
    }
}

new server;
