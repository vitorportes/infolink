import { Router } from 'express';
import login from '../Controllers/auth.controller.js';
import { verifyLoginData } from '../Middlewares/global.middlewares.js';

const authRoute = Router();

authRoute.post('/', verifyLoginData, login);

export default authRoute;
