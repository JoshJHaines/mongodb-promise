const Todo = require("../model/Todo");

function getAllTodo(body) {
	return new Promise((resolve, reject) => {
		Todo.find({})
			.then((payload) => {
				resolve(payload);
			})
			.catch((error) => {
				reject(error);
			});
	});
}

function createTodo(body) {
	return new Promise((resolve, reject) => {
		const newTodo = new Todo({
			todo: body.todo,
		});

		newTodo
			.save()
			.then((payload) => {
				resolve(payload);
			})
			.catch((error) => {
				reject(error);
			});
	});
}

function updateTodoById(id, body) {
	return new Promise((resolve, reject) => {
		Todo.findByIdAndUpdate(
            id,
            body,
            {new: true})
			.then((payload) => {
				resolve(payload);
			}).catch((error) => {
				reject(error);
			})
	});
}

module.exports = {
	getAllTodo,
	createTodo,
	updateTodoById,
};
