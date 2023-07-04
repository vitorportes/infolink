import { Router } from 'express';
import { helloWorld } from '../Controllers/user.controller.js';

const userRoute = Router();

userRoute.get('/', helloWorld);

export default userRoute;
