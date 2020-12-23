"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//Controller
const games_controller_1 = __importDefault(require("../controllers/games.controller"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.Routes();
    }
    Routes() {
        this.router.get('/', games_controller_1.default.GetAll);
        this.router.get('/:id', games_controller_1.default.GetOne);
        this.router.post('/', games_controller_1.default.SaveNewGame);
        this.router.delete('/:id', games_controller_1.default.DeleteGame);
        this.router.put('/:id', games_controller_1.default.UpdateGame);
    }
}
const gamesRouter = new GamesRoutes();
exports.default = gamesRouter.router;
