const musicModel = require('../models/music.model')
const { uploadFile } = require('../services/storage.service')
const jwt = require('jsonwebtoken')

async function createMusic(req, res) {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (decoded.role !== "artist") {
            return res.status(403).json({
                message: "You are not authorized to perform this action"
            })
        }
        const { title } = req.body
        const file = req.file

        const result = await uploadFile(file.buffer.toString('base64'))

        const music = await musicModel.create({
            uri: result.url,
            title,
            artist: decoded.id
        })

        res.status(201).json({
            message: "Message created successfully",
            music: {
                id: music._id,
                uri: music.uri,
                title: music.title,
                artist: music.artist
            }
        })
    } catch (error) {
        console.error(error);
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
}

module.exports = { createMusic }