import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
  userId: {
    type: String,
  },
});

const TodoModel = mongoose.model('Todo', todoSchema);

export default TodoModel;
