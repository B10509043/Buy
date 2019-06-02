var express = require('express');
var router = express.Router();

const {
  getCartByUserId,
} = require('../stores/cart')

const {
  getUserById,
} = require('../stores/user');

router.get('/', async function(req, res, next) {


  const {_id:userId }= req.session.user;
  const user = await getUserById(userId);
  const cart = await getCartByUserId(userId);

  console.log(cart);
  
  res.render('memberlist', {user: user,cart});
});

module.exports = router;
