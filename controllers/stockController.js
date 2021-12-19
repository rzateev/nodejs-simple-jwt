const Stock = require('../models/Stock')
const User = require('../models/User')

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

    async getAllTickers() {
        const listOfTickers = new Set()
        try {
            const users = await User.find({}, {_id:0, "tickers":1}).lean()
            for (let usersKey in users) {
                const userTickers = users[usersKey].tickers
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

    async getStocks(req, res) {
        try {
            const stocks = await Stock.find()
            res.json(stocks)

            res.json('server work')
        } catch(e) {

        }
    }
}

module.exports = stockController
