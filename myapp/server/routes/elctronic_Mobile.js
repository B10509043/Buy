var express = require('express');
var router = express.Router();

const {
  getProductBySort,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySort('行動裝置');

  res.render('elctronic_Mobile', { products : products,user:user, sort: '行動裝置'});
});

module.exports = router;