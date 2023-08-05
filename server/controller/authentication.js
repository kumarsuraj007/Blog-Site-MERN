import asyncHandler from 'express-async-handler';
import userSchema from '../model/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Require Custom Path 
import {resolve} from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Import ENV File 
import dotenv from 'dotenv';
dotenv.config({ path: resolve(__dirname, '../config/.env') });
const secret_key = process.env.JWT_SECRET;

export const signupUser = asyncHandler(async(req, res) => {
    const {username, email, password} = req.body;
    if(username==='' || email ==='' || password==='') {
        return res.status(422).json({error: 'Enter the giver field!'})
    }

    const checkEmail = await userSchema.findOne({email});
    if (checkEmail) {
        return res.status(400).json({error: 'Email is already taken!'})
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const saveUser = await userSchema.create({
        username, email, password:hashPassword
    });

    res.status(200).json({message:'Successfully Registered!'})
});

export const signInUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if(email ==='' || password==='') {
        return res.status(422).json({error: 'Enter the given field!'})
    }

    const matchUser = await userSchema.findOne({email});
    if (!matchUser) {
        return res.status(400).json({error: 'Wrong Credentials!'})
    }

    const matchPassword = await bcrypt.compare(password, matchUser.password);
    if (matchPassword) {
        const token = await jwt.sign({
            _id : matchUser.id
        }, secret_key);
        const {_id, name, email, } = matchUser;
        res.json({message: 'Successfully Login', token, user:{_id, name, email}})
    } else {
        return res.status(400).json({error: 'Wrong Credentials!'}) 
    }
});