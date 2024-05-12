const Router = require('express')
const router = new Router()
const transportController = require('../controller/transport.controller')


router.post('/transport', transportController.createTransport)
router.get('/transport', transportController.getTransports)
router.put('/transport', transportController.updateTransport)
router.delete('/transport/:transport_number', transportController.deleteTransport)
//Аналитический запрос для поиска т/с по email владельца/водителя
router.get('/transport/:email', transportController.getOneTransport)
//Аналитический запрос для отображения кол-ва всех т/с зарегистрированнных на email владельца/водителя
router.get('/transport/amount/:email', transportController.getTransportsAmount)



module.exports = router