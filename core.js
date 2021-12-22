const cron  = require('node-cron')
const TwelveDataProvider = require("./providers/TwelveDataProvider");
const StockController = require('./controllers/stockController')


class TaskScheduler {
    #_tasks
    constructor() {
        this.#_tasks =[]
    }

    startFetchProcess = async() => {
        console.log('startFetchProcess')
        // T ODO Выборка из базы списка trickers у пользователей
        let task = cron.schedule("*/2 * * * *",async()=> {

            try {


            const tickersSet = await StockController.getAllUsersTickers()
            const tickersList = Array.from(tickersSet).join(',')
            console.log('schedule: starting fetching stocks at '+ new Date())
            await TwelveDataProvider.fetchStocks(`${tickersList}`, "1min", process.env.TWDT_API_KEY)
            } catch (e) {
                console.log(e)
            }

            },
            {
                scheduled: true
            })
        task.start()
        this.#_tasks.push(task)
    }
}

module.exports = {TaskScheduler};
