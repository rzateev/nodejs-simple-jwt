require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter.js')
const PORT = process.env.NODE_PORT || 5000


const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async() => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MDB_USER}:${process.env.MDB_PASS}@cluster0.mfp5t.mongodb.net/${process.env.MDB_DBNAME}?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))

    } catch (e) {
        console.log(e)
    }
}

start()