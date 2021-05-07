import { Router } from 'express';
import { userController } from '../controllers/userController';

class UserRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', userController.getUsers);
        this.router.post('/signup', userController.signUp);
        this.router.post('/signin', userController.signIn);
        this.router.post('/:id/balance', userController.setBalance);
        this.router.post('/:id/alert', userController.setAlert);
        this.router.get('/:id', userController.getUser);
        this.router.put('/update/:id', userController.updateUser);
        this.router.delete('/:id', userController.deleteUser);
    }
}

const userRoutes = new UserRoutes();

export default userRoutes.router;