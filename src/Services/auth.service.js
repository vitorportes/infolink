import User from '../Models/User.js';
import jwt from 'jsonwebtoken';

const findUserByEmail = (email) =>
    User.findOne({ email: email }).select('+password');

const generateToken = (id) => {
    jwt.sign({ id: id }, process.env.JWT_SECRET);
};
export { findUserByEmail, generateToken };
