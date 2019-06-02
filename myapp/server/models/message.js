const mongoose = require("mongoose");

const modelInterfaceBuilder = require('../lib/model-interface-builder');

const schema = require("../schemas/message");



const model = mongoose.model("message", schema);



module.exports = modelInterfaceBuilder(model);