var express = require('express');
var router = express.Router();

const {
  getProductBySort,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySort('女裝女鞋');

  res.render('clothing_Femaleclothing', { products : products,user:user, sort: '女裝女鞋'});
});

module.exports = router;