var express = require('express');
var router = express.Router();

const {
    getProductBySubtype,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySubtype('機械工程系');

  res.render('book_ME', { products : products,user:user, sort: '機械工程系'});
});

module.exports = router;