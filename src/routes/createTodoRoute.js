import TodoModel from '../models/todoModel.js';

const createTodoRoute = async (req, res) => {
  const { text, userId } = req.body;
  const todo = new TodoModel({
    text,
    completed: false,
    userId,
  });
  const newTodo = await todo.save();
  res.json(newTodo);
};

export default createTodoRoute;
