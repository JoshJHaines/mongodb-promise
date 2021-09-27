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

module.exports = {
	getAllTodo,
};
