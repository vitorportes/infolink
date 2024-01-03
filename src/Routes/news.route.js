import { Router } from 'express';
import { createNewPost, getAllNews } from '../Controllers/news.controller.js';

const newsRoute = Router();

newsRoute.post('/', createNewPost);
newsRoute.get('/', getAllNews);

export default newsRoute;
