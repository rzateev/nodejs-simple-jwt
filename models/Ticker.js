const {Schema, model} = require('mongoose')

const Ticker = new Schema({
    name: {type: String, unique: true},
    description: {type: String},
})

module.exports = model('Tickers', Ticker)