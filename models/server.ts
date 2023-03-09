import express, { Application } from 'express';
import userRoutes from '../routes/usuario';
import cors from "cors";

import db from '../db/connection';


class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = '8080';


        // METODOS INICIALES
        this.dbConnection();
        this.middlewares();

        // definir mis rutas
        this.routes();
    }

    // TODO Conectar base de datos
    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error) { 
            throw new Error(error as string)
        }
    }

    middlewares(){
        // CORS
        this.app.use(cors());

        // LECTURA DEL BBOY
        this.app.use(express.json());

        // IIMPORTAR CARPETA PUBLICA
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto!!' + this.port);
        })
    }
}

export default Server; 