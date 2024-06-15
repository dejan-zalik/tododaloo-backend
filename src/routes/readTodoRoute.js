import TodoModel from '../models/todoModel.js';

const readTodoRoute = async (req, res) => {
  const todos = await TodoModel.find();
  res.json(todos);
};

export default readTodoRoute;
