var express = require('express');
var router = express.Router();

const {
  getUserByemail,
} = require('../stores/user');

router.get('/', function(req, res, next) {
  if (req.session.user === undefined) {
    res.render('login');
  } else {
    res.redirect('/membermarket');
  }
});

router.post('/', async function(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await getUserByemail(email);

    if (user === null) {
      throw new Error('帳號錯誤');
    }

    if (user.password !== password) {
      throw new Error('密碼錯誤');
    }

    req.session.user = user;
    res.redirect('/');
  } catch (error) {
    res.render('login', { error: error.message });
  }
 
});

module.exports = router;
