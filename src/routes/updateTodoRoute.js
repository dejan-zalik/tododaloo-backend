import TodoModel from '../models/todoModel.js';

const updateTodoRoute = async (req, res) => {
  const { id } = req.params;
  const todo = await TodoModel.findById(id);
  todo.text = req.body.text;
  todo.completed = req.body.completed;
  const updatedTodo = await todo.save();
  res.json(updatedTodo);
};

export default updateTodoRoute;
