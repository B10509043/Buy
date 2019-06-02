var express = require('express');
var router = express.Router();

const {
  getProductBySort,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySort('其他雜項');

  res.render('others_others', { products : products,user:user, sort: '其他雜項'});
});

module.exports = router;