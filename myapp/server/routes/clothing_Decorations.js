var express = require('express');
var router = express.Router();

const {
  getProductBySort,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySort('飾品配件');

  res.render('clothing_Decorations', { products : products,user:user, sort: '飾品配件'});
});

module.exports = router;