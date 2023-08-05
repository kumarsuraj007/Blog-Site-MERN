import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "Please Enter Your Username!"]
    },

    email: {
        type: String,
        require: [true, "Please Enter Your Email!"]
    },

    password: {
        type: String,
        require: [true, "Please Enter Your Password!"]
    }
}, {timestamps: true});

export default mongoose.model('User', userSchema);