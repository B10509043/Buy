var express = require('express');
var router = express.Router();

const {
  getProductBySort,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySort('租屋專區');

  res.render('houserent_houserent', { products : products,user:user, sort: '租屋專區'});
});

module.exports = router;