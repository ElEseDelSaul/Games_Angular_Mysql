import { Request, Response } from "express";
import pool from "../database";

class ctrlGames {

    public async GetAll(req: Request, res: Response): Promise<void> {
        await pool.query("SELECT * FROM games", (err, result) => {
            if (err) throw err;
            res.json(result);
            console.log("Games Getted");
        });
    }

    public async GetOne(req: Request, res: Response): Promise<void> {
        await pool.query(`SELECT * FROM games WHERE id = ? `, [req.params.id], (err, result) => {
            if (err) throw err;
            res.json(result[0]);
            console.log("Game Finded");
        });
    }

    public async SaveNewGame(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO games SET ?', [req.body], (err, result) => {
            if (err) throw err;
            res.json({ message: "Game Saved Successfully!" });
            console.log("Game Saved")
        })
    }

    public async DeleteGame(req: Request, res: Response): Promise<void> {
        await pool.query(`DELETE FROM games WHERE id = ?`, [req.params.id], (err, result) => {
            if (err) throw err;
            res.json({ message: "Game Deleted Successfully!" })
            console.log("Game Deleted");
        })
    }

    public async UpdateGame(req: Request, res: Response): Promise<void> {
        await pool.query('UPDATE games SET ? WHERE id = ?', [req.body, req.params.id], (err, resul) => {
            if (err) throw err;
            res.json({ message: "Game Updated Successfully!" });
            console.log("Game Updated");
        });
    }

}

export default new ctrlGames;