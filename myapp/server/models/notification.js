const mongoose = require("mongoose");

const modelInterfaceBuilder = require('../lib/model-interface-builder');

const schema = require("../schemas/notification");



const model = mongoose.model("notifications", schema);



module.exports = modelInterfaceBuilder(model);