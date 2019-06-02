var express = require('express');
var router = express.Router();

const {
    getProductBySubtype,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySubtype('工業設計系');

  res.render('book_ID', { products : products,user:user, sort: '工業設計系'});
});

module.exports = router;