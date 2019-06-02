var express = require('express');
var router = express.Router();

const {
  getProductBySort,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySort('教科書籍');

  res.render('book_Textbook', { products : products,user:user, sort: '教科書籍'});
});

module.exports = router;