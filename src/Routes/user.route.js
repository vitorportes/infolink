import { Router } from 'express';
import userController from '../Controllers/user.controller.js';
import globalMiddlewares from '../Middlewares/global.middlewares.js';

const userRoute = Router();

userRoute.get('/', userController.findAllUsers);

userRoute.post(
    '/',
    globalMiddlewares.verifySignUpData,
    userController.signUpUser
);

userRoute.get(
    '/:userId',
    globalMiddlewares.verifyId,
    globalMiddlewares.verifyUser,
    userController.findUserById
);

userRoute.patch(
    '/:userId',
    globalMiddlewares.verifyId,
    globalMiddlewares.verifyUser,
    globalMiddlewares.verifyUpdateData,
    userController.updateUser
);

export default userRoute;
