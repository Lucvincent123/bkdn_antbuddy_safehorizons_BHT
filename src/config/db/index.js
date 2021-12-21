const mongoose = require('mongoose')

async function connect(url) {
    try {
        await mongoose.connect(url, {
            useNewUrlParser : true,
            useUnifiedTopology: true,
        })
        console.log('Connected to DB!!')
    } catch (error) {
        console.log('Failed to connect to DB',error)
    }
}

module.exports = { connect }