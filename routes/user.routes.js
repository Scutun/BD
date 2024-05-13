const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')


router.post('/user', userController.createUser)
router.get('/user', userController.getUsers)
router.get('/user/one/:email', userController.getOneUser)
router.put('/user', userController.updateUser)
router.delete('/user/:email', userController.deleteUser)


module.exports = router