import { Router, Request, Response } from 'express';
//Controller
import ctrlGames from "../controllers/games.controller";

class GamesRoutes {

    public router: Router;
    constructor() {
        this.router = Router();
        this.Routes();
    }

    Routes() {
        this.router.get('/', ctrlGames.GetAll);
        this.router.get('/:id',ctrlGames.GetOne);
        this.router.post('/', ctrlGames.SaveNewGame);
        this.router.delete('/:id', ctrlGames.DeleteGame);
        this.router.put('/:id', ctrlGames.UpdateGame);
    }

}

const gamesRouter = new GamesRoutes();
export default gamesRouter.router;