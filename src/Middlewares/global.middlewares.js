import mongoose from 'mongoose';
import userServices from '../Services/user.service.js';

const verifyId = async (req, res, next) => {
    try {
        const userId = req.params.userId;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).send('id de usuário inválido');
        }

        return next();
    } catch (error) {
        console.log(error);
        res.status(400).send('id de usário não está no formato adequeado');
    }
};

const verifyUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const user = await userServices.findUserById(userId);

        if (!user) {
            return res.status(404).send('O usuário não foi encontrado');
        }

        return next();
    } catch (error) {
        console.log(error);
    }
};

const verifySignUpData = (req, res, next) => {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
        return res.status(400).send('preencha todos os campos');
    }

    return next();
};

const verifyUpdateData = (req, res, next) => {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name && !username && !email && !password && !avatar && !background) {
        return res
            .status(400)
            .send(
                'Preencha pelo menos um dos campos para atualizar seus dados'
            );
    }

    return next();
};

const globalMiddlewares = {
    verifyId,
    verifyUser,
    verifySignUpData,
    verifyUpdateData,
};

export default globalMiddlewares;
