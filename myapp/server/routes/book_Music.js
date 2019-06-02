var express = require('express');
var router = express.Router();

const {
  getProductBySort,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySort('音樂用品');

  res.render('book_Music', { products : products,user:user, sort: '音樂用品'});
});

module.exports = router;