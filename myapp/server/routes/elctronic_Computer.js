var express = require('express');
var router = express.Router();

const {
  getProductBySort,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySort('電腦周邊');

  res.render('elctronic_Computer', { products : products,user:user, sort: '電腦周邊'});
});

module.exports = router;