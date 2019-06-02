const {
    create,
    findJoin,
} = require('../models/notification');

function createNotification({ product, buyerId, amount }) {
    return create({
        userId: product.user,
        product: product._id,
        buyer: buyerId,
        amount,
    });
}
function getNotificationsByUserId(userId) {
    return findJoin(['product', 'buyer','userId'], {userId});
}
function getboughtNotificationsByUserId(buyer) {
    return findJoin(['product', 'buyer','userId'], {buyer});
}



module.exports = {
    createNotification,
    getNotificationsByUserId,
    getboughtNotificationsByUserId
};
