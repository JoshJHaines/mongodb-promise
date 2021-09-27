var express = require("express");
var router = express.Router();
const {
	getAllTodo,
	createTodo,
	updateTodoById,
	deleteTodoById,
} = require("./controller/todoController");

/* GET home page. */
router.get("/", function (req, res, next) {
	getAllTodo({})
		.then((payload) => {
			res.json({ message: "success", payload });
		})
		.catch((error) => {
			res.status(500).json({ message: "failure", error: error.message });
		});
});

router.post("/create-todo", function (req, res) {
	createTodo(req.body)
		.then((payload) => {
			res.json({ message: "success", payload });
		})
		.catch((error) => {
			res.status(500).json({ message: "failure", error: error.message });
		});
});

router.put("/update-todo-by-id/:id", function (req, res) {
	updateTodoById(req.params.id, req.body)
		.then((payload) => {
			res.json({ message: "success", payload });
		})
		.catch((error) => {
			res.status(500).json({ message: "failure", error: error.message });
		});
});

router.delete("/delete-todo-by-id/:id", function (req, res) {
	deleteTodoById(req.params.id)
		.then((payload) => {
			res.json({ message: "success", payload });
		})
		.catch((error) => {
			res.status(500).json({ message: "failure", error: error.message });
		});
});

module.exports = router;
