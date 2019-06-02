const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = new Schema({
    user: {
		type: Schema.Types.ObjectId,
		ref: 'users',
	},
    productId: {
        type: Schema.Types.ObjectId,
    },
    createtime:{
        type: String,
    },
    comment: {
        type: String,
    }
}, { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } })

