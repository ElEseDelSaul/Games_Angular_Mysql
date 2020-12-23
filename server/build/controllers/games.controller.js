"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ctrlGames {
    GetAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("SELECT * FROM games", (err, result) => {
                if (err)
                    throw err;
                res.json(result);
                console.log("Games Getted");
            });
        });
    }
    GetOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`SELECT * FROM games WHERE id = ? `, [req.params.id], (err, result) => {
                if (err)
                    throw err;
                res.json(result[0]);
                console.log("Game Finded");
            });
        });
    }
    SaveNewGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO games SET ?', [req.body], (err, result) => {
                if (err)
                    throw err;
                res.json({ message: "Game Saved Successfully!" });
                console.log("Game Saved");
            });
        });
    }
    DeleteGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`DELETE FROM games WHERE id = ?`, [req.params.id], (err, result) => {
                if (err)
                    throw err;
                res.json({ message: "Game Deleted Successfully!" });
                console.log("Game Deleted");
            });
        });
    }
    UpdateGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE games SET ? WHERE id = ?', [req.body, req.params.id], (err, resul) => {
                if (err)
                    throw err;
                res.json({ message: "Game Updated Successfully!" });
                console.log("Game Updated");
            });
        });
    }
}
exports.default = new ctrlGames;
