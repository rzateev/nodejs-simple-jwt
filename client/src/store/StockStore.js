import {makeAutoObservable} from "mobx";

export default class StockStore {
    constructor() {
        this._datesOfTrade = [
            {id: 1, date: "2021.12.17"},
            {id: 2, date: "2021.12.18"},
        ]
        this._tickers = [
             {_id:1, name:'AAPL'},
             {_id:2, name:'MSFT'},
             {_id:3, name:'GOOGL'},
             {_id:4, name:'AMZN'}
        ]
        this._stocks = [
             {_id:1, ticker:"AAPL" ,datetime: "2021-12-17T08:58:00.000+00:00", open: 171.37, high: 171.58, low: 171.32001, close: 171.45, volume:637683},
             {_id:2, ticker:"AAPL", datetime: "2021-12-17T08:59:00.000+00:00", open: 171.45, high: 171.52, low: 170.5, close: 170.86, volume: 1816740},
            ]

        this._lastStocks = [
            {_id:1, ticker:"AAPL" ,datetime: "2021-12-17T08:58:00.000+00:00", open: 171.37, high: 171.58, low: 171.32001, close: 171.45, volume:637683},
            {_id:2, ticker:"AAPL", datetime: "2021-12-17T08:59:00.000+00:00", open: 171.45, high: 171.52, low: 170.5, close: 170.86, volume: 1816740},
        ]

        this._selectedTicker = {}
        this._selectedDateOfTrade = {}
        this._page = 0
        this._totalCount = 0
        this._limit = 10

        makeAutoObservable(this)
    }

    
    setTickers(tickers) {
        this._tickers = tickers
    }
    setStocks(stocks) {
        this._stocks = stocks
    }

    setLastStocks(lastStocks) {
        this._lastStocks = lastStocks
    }
    setSelectedTicker(ticker) {
        this.setPage(1)
        this._selectedTicker = ticker
    }
    setSelectedDateOfTrade(dateOfTrade) {
        this.setPage(1)
        this._selectedDateOfTrade = dateOfTrade
    }

    setPage(page) {
        console.log(page)
        this._page = page
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }



    get tickers() {
        return this._tickers
    }
    get datesOfTrade() {
        return this._datesOfTrade
    }
    get stocks() {
        return this._stocks
    }
    get lastStocks() {
        return this._lastStocks
    }
    get selectedTicker() {
        return this._selectedTicker
    }
    get selectedDateOfTrade() {
        return this._selectedDateOfTrade
    }

    get totalCount() {
        return this._totalCount
    }

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }
}