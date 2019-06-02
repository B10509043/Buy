var express = require('express');
var router = express.Router();

const {
  getUserById,
} = require('../stores/user');

router.get('/', async function(req, res, next) {
  const {_id:userId }= req.session.user;
  const user = await getUserById(userId);

  res.render('memberindex', { user: user });
});

module.exports = router;

