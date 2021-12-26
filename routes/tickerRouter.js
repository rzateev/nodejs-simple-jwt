const  Router =require('express')
const router = new Router()
const tickerController = require('../controllers/tickerController.js')

router.post('/',tickerController.create)
router.get('/',tickerController.getAll)
router.get('/:id',tickerController.getOne)

module.exports = router