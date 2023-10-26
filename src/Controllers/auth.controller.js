import { generateToken } from '../Services/auth.service.js';

const login = async (req, res) => {
    const user = req.user;
    const token = generateToken(user.id);

    res.send({ token });
};

export default login;
