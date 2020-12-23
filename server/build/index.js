"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//Routes
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const games_routes_1 = __importDefault(require("./routes/games.routes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.Config();
        this.Routes();
        this.Start();
    }
    Config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    Routes() {
        this.app.use('/', index_routes_1.default);
        this.app.use('/games', games_routes_1.default);
    }
    Start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on Port: " + this.app.get('port'));
        });
    }
}
new Server();
