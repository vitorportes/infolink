import { Router } from 'express';

import {
    findAllUsers,
    signUpUser,
    findUserById,
    updateUser,
} from '../Controllers/user.controller.js';

import {
    verifyId,
    verifyUser,
    verifySignUpData,
    verifyUpdateData,
} from '../Middlewares/global.middlewares.js';

const userRoute = Router();

userRoute.get('/', findAllUsers);

userRoute.post('/', verifySignUpData, signUpUser);

userRoute.get('/:userId', verifyId, verifyUser, findUserById);

userRoute.patch('/:userId', verifyId, verifyUser, verifyUpdateData, updateUser);

export default userRoute;
