const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = new Schema({
    userId : {
        type: Schema.Types.ObjectId,
        unique: true,
        required: true,
    },
    products : [{
        type: Schema.Types.ObjectId,
        ref: 'products',
    }],
}, { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } })

