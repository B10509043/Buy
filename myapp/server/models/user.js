const mongoose = require("mongoose");

const modelInterfaceBuilder = require('../lib/model-interface-builder');

const schema = require("../schemas/user");



const model = mongoose.model("users", schema);



module.exports = modelInterfaceBuilder(model);