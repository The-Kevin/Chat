import {Request, Response} from 'express';
import express = require('express');
import path = require('path')

class Rotas{

    public routes = express.Router()

    constructor(){
        this.routes.get('/', (request: Request, response: Response) => {
            response.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
        })  
    }
}

export default Rotas;

 