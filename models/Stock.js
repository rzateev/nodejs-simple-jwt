const {Schema, model} = require('mongoose')

const Stock = new Schema({
    ticker: {type: String, required: true},
    datetime: {type: Date, required: true},
    open: {type: Number, required: true},
    high: {type: Number, required: true},
    low: {type: Number, required: true},
    close: {type: Number, required: true},
    volume: {type: Number, required: true},
    dividend_amount: {type: Number, required: false},
    split_coefficient: {type: Number, required: false, default: 1}
})

Stock.index({'ticker': 1, 'datetime': 1}, {unique: true});
module.exports = model('Stocks', Stock)