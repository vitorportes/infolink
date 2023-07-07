import mongoose from 'mongoose';
import userServices from '../Services/user.service.js';

const signUpUser = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
        return res.status(400).send('preencha todos os campos');
    }

    try {
        const user = await userServices.signUp(req.body);

        if (!user) {
            return res
                .status(400)
                .send({ message: 'Ocorreu um erro ao realizar o cadastro' });
        }

        return res.status(201).send({
            message: 'Cadastro feito com sucesso',
            user: { id: user._id, name, username, email, avatar, background },
        });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .send({ message: 'Ocorreu um erro ao realizar o cadastro' });
    }
};

const findAllUsers = async (req, res) => {
    try {
        const allUsers = await userServices.findAllUsers();

        if (allUsers.length === 0) {
            return res.status(400).send('Não existem usuários cadastrados');
        }

        res.status(200).send(allUsers);
    } catch (error) {
        console.log(error);
        res.status(500).send('Houve algum problema ao buscar os usuários');
    }
};

const findUserById = async (req, res) => {
    const userId = req.params.userId;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).send('id de usuário inválido');
    }

    try {
        const user = await userServices.findUserById(userId);

        if (!user) {
            return res.status(404).send('O usuário não foi encontrado');
        }

        return res.status(200).send(user);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Houve algum problema ao buscar o usuário');
    }
};

const userController = { signUpUser, findAllUsers, findUserById };

export default userController;
