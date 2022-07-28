const todoController = require('./todo.controller')
const Router = require('express')

const router = new Router()

router.post('/todo', todoController.createTodo)
router.get('/todo', todoController.getTodo)
router.get('/todo/:id', todoController.getOneTodo)
router.put('/todo/:id', todoController.updateTodo)
router.delete('/todo/:id', todoController.deleteTodo)

module.exports = router

