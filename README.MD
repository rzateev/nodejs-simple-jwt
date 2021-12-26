#Overview
- Fetch stocks from API and save it in MONGO DB
- Tricks are store in USER table individually
- Telegram integration
- React front

#How to start

npm start

#Install
npm init
npm i express mongoose nodemon

https://www.npmjs.com/package/bcryptjs

npm install bcryptjs
npm i express-validator
npm i dotenv

https://www.npmjs.com/package/jsonwebtoken
npm install jsonwebtoken
npm install axios
npm install --save node-cron



API
http://localhost:5000/api/auth/registration
http://localhost:5000/api/auth/login
http://localhost:5000/api/auth/users
http://localhost:5000/api/auth/check
http://localhost:5000/api/stock?page=0&limit=5&ticker=AAPL

const API_ENDPOINT=`https://api.twelvedata.com`
// https://api.twelvedata.com/time_series?symbol=AAPL,EUR/USD,ETH/BTC:Huobi,TRP:TSX&interval=1min&apikey=your_api_key
// https://marketdata.tradermade.com/api/v1/live?currency=EURUSD,GBPUSD,UK100&api_key=YOUR_API_KEY'

// MongoDB Aggregate-запрос для получения самого последнего элемента в группе
https://coderoad.ru/42325556/MongoDB-Aggregate-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-%D1%81%D0%B0%D0%BC%D0%BE%D0%B3%D0%BE-%D0%BF%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BD%D0%B5%D0%B3%D0%BE-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B0-%D0%B2-%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B5

// https://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js/54901060
//https://www.akashmittal.com/pagination-reactjs-bootstrap/
