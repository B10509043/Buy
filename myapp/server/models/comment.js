const mongoose = require("mongoose");

const modelInterfaceBuilder = require('../lib/model-interface-builder');

const schema = require("../schemas/comment");



const model = mongoose.model("comment", schema);



module.exports = modelInterfaceBuilder(model);