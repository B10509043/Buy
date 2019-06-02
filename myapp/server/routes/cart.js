var express = require('express');
var router = express.Router();

const {
    getCartByUserId,
} = require('../stores/cart');
const {
    getProductsByIds,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  try {
        const { _id: userId } = req.session.user;
        const cart = await getCartByUserId(userId);
        const products = await getProductsByIds(cart.productIds);

        res.status(200).json(products);
  } catch (error) {
      console.log(error.stack);
  }
});

module.exports = router;
