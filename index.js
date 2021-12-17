require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter.js')
const PORT = process.env.PORT || 5000


const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))

    } catch (e) {
        console.log(e)
    }
}

start()