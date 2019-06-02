const mongoose = require("mongoose");

const modelInterfaceBuilder = require('../lib/model-interface-builder');

const schema = require("../schemas/cart");



const model = mongoose.model("carts", schema);



module.exports = modelInterfaceBuilder(model);