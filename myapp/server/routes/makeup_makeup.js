var express = require('express');
var router = express.Router();

const {
  getProductBySort,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySort('美妝保養');

  res.render('makeup_makeup', { products : products,user:user, sort: '美妝保養'});
});

module.exports = router;