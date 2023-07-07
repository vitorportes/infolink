import User from '../Models/User.js';

const signUp = (body) => User.create(body);

const findAllUsers = () => User.find();

const findUserById = (userId) => User.findById(userId);

const updateUser = (
    userId,
    name,
    username,
    email,
    password,
    avatar,
    background
) =>
    User.findOneAndUpdate(
        { _id: userId },
        {
            name,
            username,
            email,
            password,
            avatar,
            background,
        }
    );

const userServices = {
    signUp,
    findAllUsers,
    findUserById,
    updateUser,
};

export default userServices;
