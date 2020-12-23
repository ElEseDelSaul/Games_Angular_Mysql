import { Router, Request, Response } from "express";
//Controller
import ctrlIndex from "../controllers/index.controller";

class IndexRoutes {

    public router: Router;
    constructor() {
        this.router = Router();
        this.Routes();
    }

    Routes() {
        this.router.get('/', ctrlIndex.Index);
        this.router.get('/about', ctrlIndex.Home);
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;