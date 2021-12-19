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
http://localhost:5000/auth/registration
http://localhost:5000/auth/login
http://localhost:5000/auth/users

const API_ENDPOINT=`https://api.twelvedata.com`
// https://api.twelvedata.com/time_series?symbol=AAPL,EUR/USD,ETH/BTC:Huobi,TRP:TSX&interval=1min&apikey=your_api_key
// https://marketdata.tradermade.com/api/v1/live?currency=EURUSD,GBPUSD,UK100&api_key=YOUR_API_KEY'