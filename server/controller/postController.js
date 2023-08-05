import postSchema from '../model/postModel.js';

export const createPost = async (req, res) => {
    try {
        const { title, body, photo} = req.body;
        if (title === "" || body === "" || photo=== "") {
            return res.status(400).json({ error: 'Please add given field!' })
        }
        // req.user.password = undefined;
        const savePost = await postSchema.create({
            title,
            body,
            photo,
            postedBy: req.user
        })
        res.status(200).json({ Message: 'Post created successfully!' })
    } catch (error) {
        res.status(400).json(error)
    }
}

export const allPost = async (req, res) => {
    try {
        const findAllPost = await postSchema.find().populate("postedBy", "_id, username");
        res.status(200).json(findAllPost)
    } catch (error) {
        res.status(400).json(error)
    }
}