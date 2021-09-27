var express = require("express");
var router = express.Router();
const { getAllTodo } = require("./controller/todoController");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.send("todo");
});

module.exports = router;
