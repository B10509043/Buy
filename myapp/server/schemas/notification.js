const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = new Schema({
    userId : {
        type: Schema.Types.ObjectId,
        
        ref: 'users',
    },
    product : {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'products',
    },
    buyer: {
        type: Schema.Types.ObjectId,
        
        ref: 'users',
    },
    amount: {
        type: Number,
        required: true,
    },
}, { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } })

