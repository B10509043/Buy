var express = require('express');
var router = express.Router();

const {
  getProductBySort,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySort('攝影用品');

  res.render('elctronic_Photographing', { products : products,user:user, sort: '攝影用品'});
});

module.exports = router;