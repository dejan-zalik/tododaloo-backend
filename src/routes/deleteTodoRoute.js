import TodoModel from '../models/todoModel.js';

const deleteTodoRoute = async (req, res) => {
  const { id } = req.params;
  const todo = await TodoModel.findById(id);
  await todo.deleteOne();
  res.status(200).json(todo);
};

export default deleteTodoRoute;
