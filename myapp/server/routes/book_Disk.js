var express = require('express');
var router = express.Router();

const {
  getProductBySort,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySort('影視光碟');

  res.render('book_Disk', { products : products,user:user, sort: '影視光碟'});
});

module.exports = router;