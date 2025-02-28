const TodoController = require('../controller/todo.controller')
const router = require('express').Router()

router.post('/createtodo', TodoController.createTodo)

module.exports = router;