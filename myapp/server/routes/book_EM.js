var express = require('express');
var router = express.Router();

const {
    getProductBySubtype,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySubtype('電子工程系');

  res.render('book_EM', { products : products,user:user, sort: '電子工程系'});
});

module.exports = router;