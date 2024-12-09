import express from 'express';
import userAuth from '../Middlewares/auth.js'
import { generateImage } from '../Controllers/imageController.js';

const imageRouter = express.Router();

imageRouter.post('/generate-image', userAuth , generateImage)

export default imageRouter; 