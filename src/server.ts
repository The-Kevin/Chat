import {Request, Response} from 'express';
import express = require('express');
import path = require('path')
//const http = require('http').createServer(express);

const app: express.Application = express();

app.get('/', (request: Request, response: Response) => {
    response.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.listen(8080, () => {
   console.log("serviço iniciado")
})