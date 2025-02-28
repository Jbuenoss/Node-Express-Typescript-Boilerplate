import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
require('dotenv').config();


const app = express();
const port = 3000;

//middlewares
app.use(express.json());
app.use(compression());
app.use(cors({credentials: true}));
app.use(cookieParser());


app.listen(process.env.PORT, async () => {
    console.log("Server running!");
});
