var express = require('express');
var router = express.Router();

const {
    getProductBySubtype,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySubtype('管理不分系');

  res.render('book_M', { products : products,user:user, sort: '管理不分系'});
});

module.exports = router;