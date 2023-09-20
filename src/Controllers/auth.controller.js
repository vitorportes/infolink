const login = async (req, res) => {
    const user = req.user;

    res.send(user);
};

export default login;
