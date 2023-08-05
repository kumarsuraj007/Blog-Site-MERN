import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';

const connectDB = asyncHandler(async (err) => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connected: ${conn.connection.host}`);
    if (err) {
        console.log(`message: ${error.message}`);
        process.exit()
    }
});

export default connectDB;