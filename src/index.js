import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import authRoute from './Routes/auth.route.js';
import userRoute from './Routes/user.route.js';
import connectDb from './Database/db.js';

dotenv.config();

const server = express();
const port = process.env.PORT || 3000;

connectDb();
server.use(express.json());
server.use(cors());
server.use('/user', userRoute);
server.use('/auth', authRoute);

server.listen(port, () => console.log(`server funcionando na porta ${port}`));
