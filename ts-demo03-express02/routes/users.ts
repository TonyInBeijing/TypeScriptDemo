import express, { Response, Request, NextFunction } from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', (req: Request, res: Response, next: NextFunction): void => {
    res.send('这是用户接口');
});

export default router
