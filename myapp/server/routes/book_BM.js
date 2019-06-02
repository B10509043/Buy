var express = require('express');
var router = express.Router();

const {
    getProductBySubtype,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySubtype('企業管理系');

  res.render('book_BM', { products : products,user:user, sort: '企業管理系'});
});

module.exports = router;