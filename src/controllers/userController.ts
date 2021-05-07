import { Request, Response } from 'express';
import pool from '../database';

class UserController {

    public async signUp(req: Request, res: Response): Promise<void> {

        const userRegister = await pool.query('INSERT INTO users set ?', [req.body]);
        if (userRegister.length === 0) {
            res.json({ message: 'Hubo un error, vuelve a intentarlo!' });
        } else {
            res.json({ successfull: 'Usuario registrado con exito!' });
        }
    }

    public async signIn(req: Request, res: Response): Promise<void> {

        const { username, password } = req.body;
        const user = await pool.query(`SELECT * FROM users where username = ? and password = ?`, [username, password]);
        if (user.length === 0) {
            res.json({ message: 'No se ha encontrado un Usuario' });
        } else {
            res.json(user);
        }
    }

    public async getUsers(req: Request, res: Response): Promise<void> {
        console.log('llegue aqui');
        const users = await pool.query('SELECT * FROM users');
        res.json(users);

    }

    public async getUser(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const user = await pool.query('SELECT * FROM users WHERE id_user = ?', [id]);
        if (user.lenght !== 0) {
            return res.json(user[0]);
        }

    }

    public async setBalance(req: Request, res: Response): Promise<void> {
        const { balance } = req.body;
        const { id } = req.params;
        await pool.query('UPDATE users set balance = ? where id_user = ?', [balance, id]);
        res.json({ message: `Se ha añadido el nuevo balance!` });
    }

    public async setAlert(req: Request, res: Response): Promise<void> {
        const { alert } = req.body;
        const { id } = req.params;
        await pool.query('UPDATE users set alert = ? where id_user = ?', [alert, id]);
        res.json({ message: `Se ha registrado la alerta!` });
    }

    public async updateUser(req: Request, res: Response): Promise<void> {

        const { id } = req.params;
        await pool.query('UPDATE users set ? WHERE id_user = ?', [req.body, id]);
        res.json({ message: `Los datos han sido actualizados!` });

    }

    public async deleteUser(req: Request, res: Response): Promise<void> {

        const { id } = req.params;
        await pool.query('DELETE FROM users WHERE id_user = ?', [id]);
        res.json({ message: 'Su ha eliminado la cuenta!' });

    }
}

export const userController = new UserController();