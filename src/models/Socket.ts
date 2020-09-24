import * as SocketIO from 'socket.io';

export class Socket {

    protected io: SocketIO.Server;

    constructor(){}

    public socketLog(){
        try{
            this.io.on('connection', (socket: any) => {
                console.log('novo usuario conectado!');
                socket.on('disconnect', () => {
                    console.log('usuario desconectado');
                })
                socket.on('chat message', (msg) => {
                    this.io.emit('chat message', (msg))
                    console.log(`mensagem: ${msg}`)
                })
            })

        }catch(error){
            console.log(error)
        }
    }
}

