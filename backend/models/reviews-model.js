const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
    {
        title: String,
        description: String,
        image: String,
        tags: Array
    }
)

module.exports = mongoose.model('reviews', Review)
