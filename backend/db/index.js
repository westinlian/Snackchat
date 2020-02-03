const mongoose = require('mongoose')

mongoose
    .connect("mongodb+srv://westin:AAsd321``@cluster0-ilqby.mongodb.net/snackchat", { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
