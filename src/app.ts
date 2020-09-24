import express = require('express');
import { createServer, Server } from 'http';
import * as SocketIO from 'socket.io';

import routes  from './routes';

 class App {

    public app: express.Application;
    public server: Server;
    private io: SocketIO.Server;
    private port = process.env.PORT || 8080;

    
    constructor(){
        this.rotas();
        this.servicoHttp();
        this.socket();
    }

    public servicoHttp(){
        let http = createServer(this.app)
        this.io = SocketIO(http)
        http.listen(this.port, () => {
            console.log(`serviço http na porta ${this.port}`);
        })
    }

    public rotas(): void{
        this.app = express();
        this.app.use(routes);
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
}
new App();