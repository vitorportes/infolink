import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import userRoute from './Routes/user.route.js';
import connectDb from './Database/db.js';

dotenv.config();

const server = express();

connectDb();
server.use(express.json());
server.use(cors());
server.use(userRoute);

server.listen(process.env.PORT, () =>
    console.log(`server funcionando na porta ${process.env.PORT}`)
);
