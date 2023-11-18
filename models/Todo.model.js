const mongoose = require("mongoose");

const todosSchema = mongoose.Schema({
  text: String,
  title: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

const ModelTodos = mongoose.model("ModelTodo", todosSchema);
module.exports = ModelTodos;
