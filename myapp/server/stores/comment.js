const {
    create,
    find,
    findJoin,
} = require('../models/comment');

function createComment(attributes) {
    return create(attributes);
}
function getCommentbyproduct(productId) {
    return findJoin(['user'],{productId});
}



module.exports = {
    createComment,
    getCommentbyproduct,
    
};