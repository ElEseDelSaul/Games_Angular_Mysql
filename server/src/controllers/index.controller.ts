import { Request, Response } from "express";

class ctrlIndex{

    public Index(req: Request, res: Response) {
        res.send('Index Page');
    }

    public Home (req: Request, res: Response) {
        res.send('Aboute Page');
    }
}

export default new ctrlIndex();