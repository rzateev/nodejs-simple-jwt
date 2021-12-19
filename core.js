const cron  = require('node-cron')
const TwelveDataProvider = require("./providers/TwelveDataProvider");
const stockController = require('./controllers/stockController')


class TaskSheduler {
    tasks = []
    startFetchProcess = async() => {
        // T ODO Выборка из базы списка trickers у пользователей
        let task = cron.schedule("*/2 * * * *",async()=> {
            const tickersSet = await stockController.getAllTickers()
            const tickersList = Array.from(tickersSet).join(',')
            console.log(tickersList)
            console.log('schedule: starting fetching stocks at '+ new Date())
            await TwelveDataProvider.fetchStocks(`${tickersList}`, "1min", process.env.TWDT_API_KEY)
            },
            {
                scheduled: true
            })

        task.start()
        this.tasks.push(task)
    }
}

module.exports = new TaskSheduler()