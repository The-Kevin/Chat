import express = require('express');
import { createServer, Server } from 'http';
import * as SocketIO from 'socket.io';

import routes  from './routes';

class server {

    public app: express.Application;
    public server: Server;
    private io: SocketIO.Server;
    private port = process.env.PORT || 8080;
    
    constructor(){
        this.expressServe();
        this.socketServe();
        this.socket();
        this.rotas();
    }

    public rotas(){
        this.app.use(routes)
    }

    private socketServe(): void {
        this.server = createServer(this.app);
        this.io = SocketIO(this.server)
    }

    public socket(){
        try{
            this.io.on('connection', (socket: any) => {
                console.log('novo usuario conectado!');
                socket.on('disconnect', () => {
                    console.log('usuario desconectado');
                })
            })
        }catch(error){
            console.log(error)
        }
    }

    public expressServe(): void {
            //inicialização do express
        try{
            this.app = express()
            this.app.listen(8080)
            console.log(`servidor conectado na porta ${this.port}`)
        }catch(error){
            console.log('Não foi possivel conectar ao servidor Express', error)
        }
    }
}

new server;
