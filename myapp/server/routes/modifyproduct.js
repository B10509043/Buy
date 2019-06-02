var express = require('express');
var router = express.Router();

const {
  getProductById,
} = require('../stores/product');

router.get('/:productId', async function(req, res, next) {
  const { productId } = req.params;
  const product = await getProductById(productId);

  res.render('modifyproduct', { product });
});

module.exports = router;