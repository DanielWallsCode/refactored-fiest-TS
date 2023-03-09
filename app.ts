import * as dotenv from 'dotenv';
import Server from './models/server';

// Configurar dotenev
dotenv.config();


const server = new Server();


server.listen();