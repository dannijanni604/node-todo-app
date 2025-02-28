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


