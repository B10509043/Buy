const mongoose = require("mongoose");

const modelInterfaceBuilder = require('../lib/model-interface-builder');

const schema = require("../schemas/product");



const model = mongoose.model("products", schema);



module.exports = modelInterfaceBuilder(model);