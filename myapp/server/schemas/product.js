const mongoose = require("mongoose");

const Schema = mongoose.Schema;



module.exports = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users',
	},
	productsname : {
        type: String,
        required: true,
	},
	createdate:{
		type: String,
		
	},
    type : {
        type: String,
        required: true,
    },
	itemquantity: {

		type: Number,

		required: true,

	},

	price: {

		type: Number,

		required: true,

	},

	sort: {

		type: String,
		required: true,

	},

	subtype: {
		type: String,
	},
	iteminfotextarea: {
		type: String,
	},
	fileNames: {
		type: [String]
	},
	comments: {
		type: [String]
	},

	}, {

	timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },

});