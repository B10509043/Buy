var express = require('express');
var router = express.Router();

const {
    getProductByProductsnameAndSort,
    getProductByProductsname,
} = require('../stores/product')


const {
  getUserById,
} = require('../stores/user');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const { query, sort } = req.query;
    const {user }= req.session;
    let products;

    if(sort==undefined){
        products = await getProductByProductsname(query);
    }else{
        products = await getProductByProductsnameAndSort(query, sort);
    }

    
    console.log(products);
    
    res.render('index', { products : products,user:user});
  } catch (error) {
    console.log(error.stack);
  }
});

module.exports = router;
