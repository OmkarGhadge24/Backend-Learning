const express = require('express')
const multer = require("multer")
const uploadFile = require("./services/storage.service")
const postModel = require("./models/post.model")

const app = express()
app.use(express.json())

const upload = multer({ storage: multer.memoryStorage() })

app.post("/create-post", upload.single("image"), async (req, res) => {
    const result = await uploadFile(req.file.buffer)
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })
    return res.status(201).json({
        message: "Post created",
        post
    })
})

app.get("/posts", async (req, res) => {
    const posts = await postModel.find()
    return res.status(201).json({
        message: "Posts fetched",
        posts
    })
})

module.exports = app