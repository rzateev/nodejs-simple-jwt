import {$authHost,$host} from "./index";


export const createTicker = async (ticker) => {
    const {data} = await $authHost.post('api/ticker',ticker)
    return data
}

export const fetchTickers = async () => {
    const {data} = await $host.get('api/ticker')
   // console.log('fetchTickers')
    //console.log(data)
    // const data = [
    //     {id:1, name:'AAPL'},
    //     {id:2, name:'MSFT'},
    //     {id:3, name:'GOOGL'},
    //     {id:4, name:'AMZN'}
    // ]
    return data
}

export const fetchLastStocks = async () => {
    const {data} = await $host.get('api/stock/last')
    return data
}

export const fetchStocks = async (ticker, dateOfTrade, page, limit = 10) => {
     const {data} = await $host.get('api/stock',{params: {
             ticker, dateOfTrade, page, limit
         }})
    console.log('fetchStocks')
    console.log('ticker',ticker)
    // const data = {}
    // data.rows = [
    //     {id:1, ticker:"AAPL" ,datetime: "2021-12-17T08:58:00.000+00:00", open: 171.37, high: 171.58, low: 171.32001, close: 171.45, volume:637683},
    //     {id:2, ticker:"AAPL", datetime: "2021-12-17T08:59:00.000+00:00", open: 171.45, high: 171.52, low: 170.5, close: 170.86, volume: 1816740},
    // ]

    // data.count =2;
    return data
}

export const fetchOneStock = async (id) => {
    const {data} = await $host.get('api/stock/'+id)
    return data
}
