import express from 'express';
const router = express.Router();

import {createPost, allPost} from '../controller/postController.js';
import {requireAuthLogin} from '../middleware/requireLogin.js'

router.route('/create').post(requireAuthLogin, createPost);
router.route('/allpost').get(requireAuthLogin, allPost);

export default router;