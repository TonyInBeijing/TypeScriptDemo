
import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function (req: any, res: any, next: any) {
    res.send('456');
});

export default router
// module.exports = router;
