var express = require('express');
var router = express.Router();

const {
  addProductToCartByUserId,
} = require('../../stores/cart');

router.post('/', async function(req, res, next) {
  try {
    console.log("安安")
    
    const {productId } = req.body;
    console.log(productId)
    const { _id,username } = req.session.user;

    const product = await addProductToCartByUserId(
      _id,productId);

    console.log('購買成功')
  
    res.status(201).json({ product });
  
  







  } catch (error) {
      console.log(error.stack);
  }
});

module.exports = router;
