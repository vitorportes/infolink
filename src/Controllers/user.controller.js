import userServices from '../Services/user.service.js';

const signUp = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
        return res.status(400).send('preencha todos os campos');
    }

    try {
        userServices.signUp({
            name,
            username,
            email,
            password,
            avatar,
            background,
        });

        return res.status(201).send({
            message: 'Cadastro feito com sucesso',
            user: { name, username, email, avatar, background },
        });
    } catch (error) {
        console.log(error);
    }
};

export { signUp };
