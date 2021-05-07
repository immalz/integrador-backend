import { Router } from 'express';
import { amountController } from '../controllers/amountController';

class AmountRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', amountController.createAmount);
        this.router.get('/:id', amountController.getAmounts);
        this.router.get('/only/:id', amountController.getAmount);
        this.router.put('/update/:id', amountController.updateAmount);
        this.router.delete('/delete/:id', amountController.deleteAmount);
    }
}

const amountRoutes = new AmountRoutes();

export default amountRoutes.router;