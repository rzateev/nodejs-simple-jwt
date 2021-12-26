const  Router =require('express')
const router = new Router()
const stockController = require('../controllers/stockController.js')

router.get('/',stockController.getAll)
router.get('/last',stockController.getLast)
router.get('/:id',stockController.getOne)

module.exports = router