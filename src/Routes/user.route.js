import { Router } from 'express';
import userController from '../Controllers/user.controller.js';

const userRoute = Router();

userRoute.post('/', userController.signUpUser);
userRoute.get('/', userController.findAllUsers);
userRoute.get('/:userId', userController.findUserById);

export default userRoute;
