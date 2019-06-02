var express = require('express');
var router = express.Router();

const {
  getAllSalingProducts,
} = require('../stores/product')
const {
  getUserById,
} = require('../stores/user');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const { sort } = req.query;
  //   var temp =""
  //   if(!(req.session.user === undefined)){
       const {user }= req.session;
  //     temp = await getUserById(userId);
  //   }
  //  const user = temp;
  //   console.log(req.session.user);
    const products = await getAllSalingProducts();

    
    console.log(products);
    
    res.render('index', { products: products,user:user});
  } catch (error) {
    console.log(error.stack);
  }
});

module.exports = router;
