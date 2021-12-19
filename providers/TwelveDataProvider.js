const axios  = require('axios')
const stockController = require('../controllers/stockController')



class TwelveDataProvider {
    async fetchStocks(tickers, interval, apiKey) {
        axios.get(`https://api.twelvedata.com/time_series?symbol=${tickers}&interval=${interval}&apikey=${apiKey}`)
            .then(response => {
                const tickersList = tickers.split(',')
                tickersList.forEach(ticker=>{
                    console.log(ticker)
                    const stockHistory = response.data[ticker]
                    for (let stockIndex in stockHistory.values) {
                        const {datetime, open, high, low, close, volume} = stockHistory.values[stockIndex]
                        if (!stockController.insertStockHistory(ticker,datetime, open, high, low, close, volume)) {
                            console.log('Ошибка при записи в базу данных')
                        }
                        //console.log(stockHistory.values[stockIndex])
                    }
                })
                //console.log(response.data);


            })
            .catch(error => {
                console.log(error);
            });
    }


}

module.exports = new TwelveDataProvider()


