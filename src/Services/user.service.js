import User from '../Models/User.js';

const signUp = (body) => User.create(body);

const userServices = {
    signUp,
};

export default userServices;
