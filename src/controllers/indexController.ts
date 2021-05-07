import {Request, Response} from 'express';
import pool from '../database';

class IndexController {
    public index (req: Request, res: Response) {
        res.json({
            project_Name: 'GESTION DE FINANZAS',
            languajes: 'MEAN STACK',
            version: 1.0
        })
    }
}

export const indexController = new IndexController();