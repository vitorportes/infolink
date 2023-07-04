import express from 'express';
import cors from 'cors';
import userRoute from './Routes/user.route.js';

const server = express();

server.use(express.json());
server.use(cors());
server.use(userRoute);

server.listen(3000, () => {
    console.log(`server funcionando na porta 3000`);
});
