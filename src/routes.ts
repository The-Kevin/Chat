import {Request, Response} from 'express';
import express = require('express');
import path = require('path')

const routes = express.Router()

routes.get('/', (request: Request, response: Response) => {
    response.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})


export default routes;