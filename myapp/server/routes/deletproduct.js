var express = require('express');
var router = express.Router();

const {
    removeProduct,
  } = require('../stores/product');

  router.get('/delete', (req, res, next) =>{
    const productId  = req.query.productId;
    DB.removeProduct('product',
		{'productId': new DB.ObjectID(id)},
		(err) => {
			if (!err) {     // 刪除成功
				res.redirect('/');
			}
		});
});

  
  module.exports = router;