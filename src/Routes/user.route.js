import { Router } from 'express';
import { signUp } from '../Controllers/user.controller.js';

const userRoute = Router();

userRoute.post('/', signUp);

export default userRoute;
