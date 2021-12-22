const Ticker = require('../models/Ticker')
const mongoose = require('mongoose');

const tickerController = {

    async create(req,res) {
        const {name, description} = req.body
        const ticker = await Ticker.create({name, description})
        return res.json({ticker})
    },

    async getAll(req, res) {
        try {
            const tickers = await Ticker.find()
            res.json(tickers)

        } catch(e) {
            console.log(e)
        }
    },

    async getOne(req,res) {

        const {id} = req.params
        console.log(id)
        console.log(mongoose.mongo.ObjectId(id))
        const ticker = await  Ticker.findById(mongoose.mongo.ObjectId(id))
        return res.json(ticker)

    },

}

module.exports = tickerController
