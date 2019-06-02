var express = require('express');
var router = express.Router();

const {
  getProductBySort,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySort('男裝男鞋');

  res.render('clothing_Maleclothing', { products : products,user:user, sort: '男裝男鞋'});
});

module.exports = router;