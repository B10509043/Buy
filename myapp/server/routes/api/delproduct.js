var express = require('express');
var router = express.Router();

const {
    deleteProduct,
} = require('../../stores/product');

// router.delete('/products/:productId', async function(req, res, next){
//     const { productId } = req.params;
//         await deleteProduct(productId);
     

//         res.sendStatus(200);

// } )
router.get('/:productId', async function(req, res, next) {
    // const {productId } = req.body
    const { productId } = req.params;
    
    
     await deleteProduct(productId);
     res.redirect('/membermarket');
    }),
        
    

  
  module.exports = router;