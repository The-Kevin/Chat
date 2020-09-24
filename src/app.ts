import express = require('express');
import { createServer, Server } from 'http';
import * as SocketIO from 'socket.io';

import Rotas from './routes';
import { Socket } from './models/Socket'

 class App extends Socket{

    public app: express.Application;
    public server: Server;
    private port = process.env.PORT || 8080;

    
    constructor(){
        super();
        this.rotas();
        this.servicoHttp();
        this.socketLog();
    }

    public rotas(): void{
        let router = new Rotas();
        this.app = express();
        this.app.use(router.routes);
    }
    
    public servicoHttp(): void{
        let http = createServer(this.app)
        this.io = SocketIO(http)
        http.listen(this.port, () => {
            console.log(`serviço http na porta ${this.port}`);
        })
    }
}
new App();