const ModelTodos = require("../models/Todo.model");

module.exports.TodosControllers = {
  createTodo: async (req, res) => {
    try {
      const { text, title, completed } = req.body;

      const todo = await ModelTodos.create({
        text,
        title,
        completed,
      });
      return res.json(todo);
    } catch (e) {
      res.json(e.message);
    }
  },

  deleteTodo: async (req, res) => {
    const { id } = req.params;

    try {
      const todo = await ModelTodos.findByIdAndDelete(id);

      await todo.remove();
      const data = await ModelTodos.find();
      return res.json(data);
    } catch (e) {
      return res.status(401).json({ error: "Ошибка" + e.toString() });
    }
  },

  getTodo: async (req, res) => {
    try {
      // const { page = Math.floor(todo.length / 2), limit = 2 } = req.query;
      const todo = await ModelTodos.find();
      // .limit(limit * 1)
      // .skip((page - 1) * limit);

      return res.json(todo);
    } catch (e) {
      return res.json(e.message);
    }
  },

  updateTodo: async (req, res) => {
    try {
      const todo = await ModelTodos.findByIdAndUpdate(req.params.id, {
        completed: req.body.completed,
        text: req.body.text,
        title: req.body.title,
      });
      todo = await ModelTodos.find();

      return res.json(todo);
    } catch (e) {
      return res.json(e.message);
    }
  },

  //end
};
