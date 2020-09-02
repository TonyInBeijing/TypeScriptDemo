import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
    res.send('Hello');
});

app.listen(3000, 'localhost', () => {
    console.log('app run at 3000');
});