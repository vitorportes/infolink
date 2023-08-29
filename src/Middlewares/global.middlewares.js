import mongoose from 'mongoose';
import userServices from '../Services/user.service.js';

const verifyId = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const user = await userServices.findUserById(userId);

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).send('id de usuário inválido');
        }

        req.userId = userId;
        req.user = user;

        return next();
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};

const verifyUser = async (req, res, next) => {
    try {
        const user = req.user;

        if (!user) {
            return res.status(404).send('O usuário não foi encontrado');
        }

        return next();
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};

const verifySignUpData = (req, res, next) => {
    try {
        const { name, username, email, password, avatar, background } =
            req.body;

        if (
            !name ||
            !username ||
            !email ||
            !password ||
            !avatar ||
            !background
        ) {
            return res.status(400).send('preencha todos os campos');
        }

        return next();
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};

const verifyUpdateData = (req, res, next) => {
    try {
        const { name, username, email, password, avatar, background } =
            req.body;

        if (
            !name &&
            !username &&
            !email &&
            !password &&
            !avatar &&
            !background
        ) {
            return res
                .status(400)
                .send(
                    'Preencha pelo menos um dos campos para atualizar seus dados'
                );
        }

        return next();
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};

const globalMiddlewares = {
    verifyId,
    verifyUser,
    verifySignUpData,
    verifyUpdateData,
};

export default globalMiddlewares;
