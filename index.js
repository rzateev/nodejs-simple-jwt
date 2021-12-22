require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/index.js')
const cors = require('cors')
const PORT = process.env.NODE_PORT || 5000
const {TaskScheduler} = require('./core.js')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async() => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MDB_USER}:${process.env.MDB_PASS}@cluster0.mfp5t.mongodb.net/${process.env.MDB_DBNAME}?retryWrites=true&w=majority`)
        const taskScheduler =new TaskScheduler()
        await taskScheduler.startFetchProcess()
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
