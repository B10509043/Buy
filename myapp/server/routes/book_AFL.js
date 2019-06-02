var express = require('express');
var router = express.Router();

const {
    getProductBySubtype,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySubtype('應用外語系');

  res.render('book_AFL', { products : products,user:user, sort: '應用外語系'});
});

module.exports = router;