import express from 'express';
const router = express.Router();

import {createPost, allPost, deletePost, updatePost} from '../controller/postController.js';
import {requireAuthLogin} from '../middleware/requireLogin.js'

router.route('/create').post(requireAuthLogin, createPost);
router.route('/allpost').get(requireAuthLogin, allPost);
router.route('/delete/:id').delete(requireAuthLogin, deletePost);
router.route('/update/:id').put(requireAuthLogin, updatePost);



export default router;