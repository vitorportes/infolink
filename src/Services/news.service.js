import News from '../Models/News.js';

const createNewPostService = (body) => News.create(body);

const getAllNewsService = () => News.find();

export { createNewPostService, getAllNewsService };
