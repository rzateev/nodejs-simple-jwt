const Router =require('express')
const router = new Router()
const userRouter = require('./userRouter.js')
const stockRouter = require('./stockRouter.js')
const tickerRouter = require('./tickerRouter.js')

router.use('/user', userRouter)
router.use('/stock', stockRouter)
router.use('/ticker', tickerRouter)


module.exports = router