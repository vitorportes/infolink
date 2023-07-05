import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoute from './Routes/user.route.js';

dotenv.config();

const server = express();

server.use(express.json());
server.use(cors());
server.use(userRoute);

server.listen(process.env.PORT, () =>
    console.log(`server funcionando na porta ${process.env.PORT}`)
);
