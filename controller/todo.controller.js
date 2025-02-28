const TodoServices = require('../services/todo.service')

exports.createTodo = async (req, res, next) => {
  console.log("Request Body:", req.body); // Debugging step

  try {

    const { userId, title, description } = req.body;

    let todo = await TodoServices.createTodo(userId, title, description);

    res.json({ status: true, message: todo })

  } catch (error) {
    throw error;

  }
}

exports.getUserTodos = async (req, res, next) => {
  try {
    const { userId } = req.body;
    console.log(userId);

    let userTodos = await TodoServices.getUserTodos(userId);

    res.json({ status: true, message: userTodos })

  } catch (error) {
    throw error;
  }
}


exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.body;
    let deleteTodo = await TodoServices.deleteTodo(id);
    res.json({ status: true, message: deleteTodo })

  } catch (error) {
    throw error;


  }
}


