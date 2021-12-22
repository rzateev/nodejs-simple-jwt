const Stock = require('../models/Stock')
const User = require('../models/User')

//const mongoose = require('mongoose');

const stockController = {
    async insertStockHistory(ticker, datetime, open, high, low, close, volume) {
        try {
            //console.log(datetime, open, high, low, close, volume)
            const stock = new Stock({ticker, datetime, open, high, low, close, volume})
            await stock.save()
            return true
        } catch(e) {
            // if (e.message.includes('E11000')) {
            //     console.log("Имеется дубль")
            // } else {
            //console.log(e)
            // }

            return false
        }
    },

    async getAllUsersTickers() {
        const listOfTickers = new Set()
        try {
            const users = await User.find({}, {_id:0, "tickers":1}).lean()
            for (let usersKey in users) {
                const userTickers = users[usersKey].tickers
                //console.log(userTickers)
                for (let tickerKey in userTickers) {
                    let tickerOne = userTickers[tickerKey];
                    listOfTickers.add(tickerOne)
                }
            }
            return listOfTickers
        } catch(e) {
            console.log(e)
            return listOfTickers
        }
    },

     async getAll(req,res) {
        let {ticker, dateOfTrade, limit, page} = req.query;

        page = page || 1
        limit = limit || 9

        const pageOptions = {
            page: parseInt(page, 10) || 0,
            limit: parseInt(limit, 10) || 10
        }

        //console.log(ticker)
        //console.log(dateOfTrade)
        dateOfTrade = undefined // TODO - filter by data

        //let offcet = page  * limit -limit
        let stocks ={};

        if (!ticker && !dateOfTrade) {
            stocks.rows = await Stock.find({})
                .skip(pageOptions.page * pageOptions.limit)
                .limit(pageOptions.limit)

            stocks.count = await Stock.countDocuments({})

            console.log('length',stocks.rows.length)
        }
        if (ticker && !dateOfTrade) {

            stocks.rows = await Stock.find({ticker})
                .skip(pageOptions.page * pageOptions.limit)
                .limit(pageOptions.limit)
            stocks.count = await Stock.countDocuments({ticker})
        }

        if (!ticker && dateOfTrade) {
            stocks.rows = await Stock.find({where:{datetime:dateOfTrade}})
                .skip(pageOptions.page * pageOptions.limit)
                .limit(pageOptions.limit)
            stocks.count = await Stock.countDocuments({where:{datetime:dateOfTrade}})
        }

        if (ticker && dateOfTrade) {
            stocks.rows = await Stock.find({where:{ticker , datetime:dateOfTrade}})
                .skip(pageOptions.page * pageOptions.limit)
                .limit(pageOptions.limit)
            stocks.count = await Stock.countDocuments({where:{ticker , datetime:dateOfTrade}})
        }

        return res.json(stocks)
    },

    async getLast(req, res) {
        try {
            console.log('getLast')
            const stocks = await Stock.aggregate([
                { $sort: {ticker:-1, datetime: 1} },
                {
                    $group: {
                        _id : "$ticker",
                        datetime: {$last: "$datetime" },
                        open: {$last:"$open"},
                        high: {$first:"high"},
                        close: {$first:"close"},
                        volume: {$first:"volume"},
                        id : {$first: "$_id"}
                    }
                },
                { $project: { _id: "$id", ticker: "$_id", datetime: 1, open: 1, high: 1, close: 1, volume: 1} }
            ])
            res.json(stocks)
        } catch(e) {

        }
    },



    async getOne(req, res) {
        try {
            const stocks = await Stock.find()
            res.json(stocks)

            res.json('get One')
        } catch(e) {

        }
    }
	
}

module.exports = stockController
