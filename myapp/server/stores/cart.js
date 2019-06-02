const {
    create,
    findOne,
    findOneAndUpdate,
    findOneJoin,
} = require('../models/cart');

function getCartByUserId(userId) {
    // return findOne({ userId });
    return findOneJoin(['products'], { userId });
}
function addProductToCartByUserId(userId, productId) {   
    return findOneAndUpdate({ 
        userId 
    }, {
        $addToSet: {
            products: productId,
        }
    },{ upsert: true, new: true } );
}

function createCartByUserId(userId) {
    return create({ userId });
}


module.exports = {
    getCartByUserId,
    addProductToCartByUserId,
    createCartByUserId,
};
