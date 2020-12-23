import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//Routes
import IndexRoutes from "./routes/index.routes";
import GamesRoutes from "./routes/games.routes";


class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.Config();
        this.Routes();
        this.Start();
    }

    Config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    Routes(): void {
        this.app.use('/', IndexRoutes);
        this.app.use('/games', GamesRoutes);
    }

    Start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on Port: " + this.app.get('port'))
        })
    }
}

new Server();