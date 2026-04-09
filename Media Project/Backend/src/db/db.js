const mongoose = require('mongoose')
require('dotenv').config()

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to database");
}

module.exports = connectDB