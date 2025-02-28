const TodoModel = require("../model/todo.model");

class TodoServices {
    static async createTodo(
        userId, title, description) {
        const createTodo = new TodoModel({ userId, title, description });
        return await createTodo.save();
    }

    static async getUserTodos(userId) {
        const getUserTodos = await TodoModel.find({ userId });
        return getUserTodos;
    }


    static async deleteTodo(id) {
        const deleteTodo = await TodoModel.findOneAndDelete({ _id: id });
        return deleteTodo;
    }
}


module.exports = TodoServices