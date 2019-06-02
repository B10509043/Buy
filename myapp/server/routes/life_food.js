var express = require('express');
var router = express.Router();

const {
  getProductBySort,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySort('飲食生活');

  res.render('life_food', { products : products,user:user, sort: '飲食生活'});
});

module.exports = router;