var express = require('express');
var router = express.Router();

const {
  getProductBySort,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySort('日常用品');

  res.render('life_daily', { products : products,user:user, sort: '日常用品'});
});

module.exports = router;