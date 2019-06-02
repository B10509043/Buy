var express = require('express');
var router = express.Router();


const {
    createUser,
} = require('../../stores/user')

const {
  createCartByUserId,
} = require('../../stores/cart')



router.post('/', async function(req, res, next) {
  try {
        
        console.log('post api');
        console.log(req.body);
        const { username, password,phonenumber, email } = req.body;
        
        const userfileNames = new Array( "/images/upload/membericon.png");
        const fullemail = email + "@mail.ntust.edu.tw"
      
        const user = await createUser({ username, password,phonenumber, fullemail, userfileNames });

        await createCartByUserId(user._id);
        
        res.status(201).json({ user });
  } catch (error) {
      console.log(error.stack);

    if (error.code === 11000) {
        res.status(409).json({ error: '帳號已被使用' });
    } else {
        res.status(500).json({ error: error.message });
    }
  }
});

module.exports = router;
