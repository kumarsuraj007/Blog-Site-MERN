import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true
    },

    photo: {
        type: String,
        required: true,
    },

    postedBy:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
});


export default mongoose.model('post', postSchema)