const TodoController = require('../controller/todo.controller')
const router = require('express').Router()

router.post('/createtodo', TodoController.createTodo)
router.get('/getUserTodos', TodoController.getUserTodos)
router.delete('/deleteTodo', TodoController.deleteTodo)

module.exports = router;