const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
	{
		recipe: {
			type: String,
			require: true,
		},
		price: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("recipe", recipeSchema);
