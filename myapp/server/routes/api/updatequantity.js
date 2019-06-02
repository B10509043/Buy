var express = require('express');
var router = express.Router();



const {
  updateProduct,
  decreaseProductItemQuantityById,
} = require('../../stores/product');

const {
  createNotification,
} = require('../../stores/notification');

router.post('/',async function (req, res, next) {
  try {

    const {sellerid,good_id, reduceitemquantity , orgitemquantity } = req.body;
    
    const { _id } = req.session.user;

    
     //var itemquantity1 = await getProductQuantity(itemquantity);
    // const productid = await getProductById(_id);
    console.log('..........')
    console.log(good_id)
    console.log(reduceitemquantity )
    console.log(orgitemquantity )
    
    var setitemquantity = orgitemquantity - reduceitemquantity;

    const product = await decreaseProductItemQuantityById(good_id, reduceitemquantity);
    
    console.log('購買成功')

    await createNotification({
      userId:sellerid, 
      product,
      buyerId: _id,
      amount: reduceitemquantity,  
    });
  
    res.status(201).json({ product });
  }
  
  catch (error) {
    console.log(error.stack);
    console.log('購買失敗');
  }
})

module.exports = router;

