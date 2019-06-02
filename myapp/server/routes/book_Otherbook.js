var express = require('express');
var router = express.Router();

const {
  getProductBySort,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySort('課外書籍');

  res.render('book_Otherbook', { products : products,user:user, sort: '課外書籍'});
});

module.exports = router;