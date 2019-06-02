var express = require('express');
var router = express.Router();

const {
  getProductById,
} = require('../stores/product');

const {
  getUserByUsername,
} = require('../stores/user');

const {
  getCommentbyproduct,
} = require('../stores/comment');


router.get('/:productId', async function(req, res, next) {
  const {user }= req.session;
  const { productId } = req.params;
  const product = await getProductById(productId);
  const productcomments = await getCommentbyproduct(productId)

  res.render('market', { product, comments: productcomments,user });
});



module.exports = router;
