const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = new Schema({
    username : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true,
    },
    phonenumber:{
        type:String,
    },
    fullemail:{ 
        type: String,
        unique:true,
    },
    userfileNames: {
		type: [String]
	}
}, { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } })

