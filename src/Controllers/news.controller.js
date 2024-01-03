import {
    createNewPostService,
    getAllNewsService,
} from '../Services/news.service.js';

const createNewPost = (req, res) => {
    res.send(201);
};

const getAllNews = async (req, res) => {
    try {
        const allNews = await getAllNewsService();

        if (news.length === 0) {
            return res
                .status(400)
                .send({ message: 'Não existem notícias cadastradas' });
        }

        res.status(200).send(allNews);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};

export { createNewPost, getAllNews };
