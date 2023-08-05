import express from 'express';
const router = express.Router();

import {signupUser, signInUser} from '../controller/authentication.js'

router.route('/register').post(signupUser);
router.route('/login').post(signInUser);


export default router;
