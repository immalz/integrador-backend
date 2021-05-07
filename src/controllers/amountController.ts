import {Request, Response} from 'express';
import pool from '../database';

class AmountController {
    public async createAmount(req: Request, res: Response): Promise<void> {

        await pool.query('INSERT INTO amounts set ?', [req.body]);
        res.json({message: 'monto guardado'});
    }
    
    public async getAmount(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const amount = await pool.query('SELECT * FROM amounts WHERE id = ?', [id]);
        if (amount.lenght !== 0) {
            return res.json(amount[0]);
        }
    }

    public async getAmounts(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        const amounts = await pool.query('SELECT * FROM amounts where id_user = ?', [id]);
        res.json(amounts);
    }

    public async updateAmount(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('UPDATE amounts set ? WHERE id_amount = ?', [req.body, id]);
        res.json({message: `El monto ha sido actualizado!`});
    }
    
    public async deleteAmount(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('DELETE FROM amounts WHERE id_amount = ?', [id]);
        res.json({message: 'El monto ha sido eliminado!'});
    }
}

export const amountController = new AmountController();