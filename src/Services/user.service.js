import User from '../Models/User.js';

const signUp = (body) => User.create(body);

const findAllUsers = () => User.find();

const findUserById = (userId) => User.findById(userId);

const userServices = {
    signUp,
    findAllUsers,
    findUserById,
};

export default userServices;
