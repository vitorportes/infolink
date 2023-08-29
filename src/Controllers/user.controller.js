import userServices from '../Services/user.service.js';

const signUpUser = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;

    try {
        const user = await userServices.signUp({
            name,
            username,
            email,
            password,
            avatar,
            background,
        });

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
        return res.status(500).send({ message: error.message });
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
        return res.status(500).send({ message: error.message });
    }
};

const findUserById = (req, res) => {
    try {
        const user = req.user;
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;
    const userId = req.userId;

    try {
        await userServices.updateUser(
            userId,
            name,
            username,
            email,
            password,
            avatar,
            background
        );

        return res.status(200).send('Atualização de dados feita  com sucesso');
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};

const userController = { signUpUser, findAllUsers, findUserById, updateUser };

export default userController;
