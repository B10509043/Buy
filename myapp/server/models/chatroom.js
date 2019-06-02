const mongoose = require("mongoose");

const modelInterfaceBuilder = require('../lib/model-interface-builder');

const schema = require("../schemas/chatroom");



const model = mongoose.model("chatroom", schema);



module.exports = modelInterfaceBuilder(model);