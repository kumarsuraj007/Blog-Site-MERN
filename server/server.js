import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

// Database connection 
import connectDB from './config/db.js';
dotenv.config({path: './config/.env'});
connectDB();

// Import routes 
import userRoute from './route/userRoute.js';
import postRoute from './route/postRoute.js'

// Middleware 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/auth', userRoute);
app.use('/api/post', postRoute)

const port = 8000 || process.env.PORT;
app.listen(port, () => {console.log(`Server is upto ${port}!`)})