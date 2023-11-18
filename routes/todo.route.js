const { Router } = require("express");
const { TodosControllers } = require("../controllers/todo.controller.js");

const router = Router();

router.post("/todos", TodosControllers.createTodo);
router.get("/todos", TodosControllers.getTodo);
router.patch("/todos/:id", TodosControllers.updateTodo);
router.delete("/todos/:id", TodosControllers.deleteTodo);

module.exports = router;
