var express = require('express');
var router = express.Router();

const {
    getProductBySubtype,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  const {user }= req.session;
  const products = await getProductBySubtype('資訊管理系');

  res.render('book_MIS', { products : products,user:user, sort: '資訊管理系'});
});

module.exports = router;