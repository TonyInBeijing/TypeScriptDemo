import express, { Response, Request, NextFunction } from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', (req: Request, res: Response, next: NextFunction): void => {
    console.log(req.query);
    res.send('这是首页接口');
});

export default router
