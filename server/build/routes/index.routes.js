"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//Controller
const index_controller_1 = __importDefault(require("../controllers/index.controller"));
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.Routes();
    }
    Routes() {
        this.router.get('/', index_controller_1.default.Index);
        this.router.get('/about', index_controller_1.default.Home);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
