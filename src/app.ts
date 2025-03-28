import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import { successHandler, errorHandler } from './middlawares/morgan';
import Logger from './config/logger';
require('dotenv').config();

const app = express();
const port = 3000;

//middlewares
app.use(successHandler);
app.use(errorHandler);
app.use(express.json());
app.use(compression());
app.use(cors({ credentials: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.status(200).send('Hello world');
});

app.get('/error', (req, res) => {
    res.locals.errorMessage = 'An internal server error occurred.';
    res.status(500).send('Internal server error');
});

app.listen(process.env.PORT, async () => {
    Logger.info('Server running!');
});
