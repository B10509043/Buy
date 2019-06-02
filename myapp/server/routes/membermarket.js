var express = require('express');
var router = express.Router();

const {
  getProductByUserId,
} = require('../stores/product')
const {
  getUserById,
} = require('../stores/user');
/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    
    
    const {_id:userId }= req.session.user;
    const user = await getUserById(userId);
    const products = await getProductByUserId(userId);
    
    res.render('membermarket', { products: products,user: user });
  } catch (error) {
    console.log(error.stack);
  }
});

module.exports = router;