var express = require('express');
var router = express.Router();

const {
    getProductBySubtype,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySubtype('商業設計系');

  res.render('book_CD', { products : products,user:user, sort: '商業設計系'});
});

module.exports = router;