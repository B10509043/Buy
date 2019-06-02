const {
    create,
    find,
    findOne,
    remove,
    findOneAndUpdate,
    findOneJoin,
    findJoin,
} = require('../models/product');

function getAllSalingProducts() {
    return findJoin(['user'], { 
        itemquantity : {
            $gt: 0,
        }
    });
}
function getProductBySort(sort) {
    return findJoin(['user'],{
        sort,
        itemquantity : {
            $gt: 0,
        },
    });
}
function getProductBySubtype(subtype) {
    return findJoin(['user'],{
        subtype,
        itemquantity : {
            $gt: 0,
        },
    });
}
function getProductByProductsname(productsname) {
    return findJoin(['user'],{
        productsname,
        itemquantity : {
            $gt: 0,
        },
    });
}
function getProductByProductsnameAndSort(productsname, sort) {
    return findJoin(['user'],{
        productsname,
        sort,
        itemquantity : {
            $gt: 0,
        },
    });
}

function getProductById(_id) {
    return findOneJoin(['user'],{ _id });
}

function getProductByUserId(userId){
    return find({user: userId})
}

function createProduct(product) {
    return create(product);
}

function getProductsByIds(ids) {
    return find({
        _id: { $in: ids },
    });
}
function deleteProduct(_id){
    return remove({ _id })
}
function updateProduct(id,product){
    console.log('..............')
    console.log(product)
    console.log('...........')
    var x = {_id:id._id}
    console.log(x)
    console.log(product)
    return findOneAndUpdate(x,product)
}

function decreaseProductItemQuantityById(_id, amount) {
    return findOneAndUpdate({
        _id,
    }, {
        $inc: {
            itemquantity: -amount,
        }
    });
}

module.exports = {
    getAllSalingProducts,
    getProductById,
    createProduct,
    getProductBySort,
    getProductsByIds,
    getProductByUserId,
    deleteProduct,
    updateProduct,
    decreaseProductItemQuantityById,
    getProductByProductsname,
    getProductByProductsnameAndSort,
    getProductBySubtype,
};