var express = require('express');
var router = express.Router();

const {
    getUserById,
} = require('../stores/user')

router.post('/', function (req, res, next){
    const { id } = req.body;
    const user = getUserById(id);
    const userpic = '100';
    res.status(200).json({ user: userpic });
});



module.exports = router;