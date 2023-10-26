import User from '../Models/User.js';
import jwt from 'jsonwebtoken';

const findUserByEmail = (email) => {
    return User.findOne({ email: email }).select('+password').exec();
};

const generateToken = (id) => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: 86400 });
};

export { findUserByEmail, generateToken };
