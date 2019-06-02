var express = require('express');
var router = express.Router();

const {
    createComment,
} = require('../../stores/comment')
const {
    getUserById,
} = require('../../stores/user')


router.post('/', async function(req, res, next) {
    try {
        const {good_id, commenttextarea } = req.body;
        
        const { _id} = req.session.user;
        const monthNames = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月',];
        var temp = new Date();
        const createdate = temp.getFullYear() + "-" + monthNames[temp.getMonth()] + temp.getDate() + "日 " +temp.getHours() + ":" + temp.getMinutes() ;
        const comment = await createComment({
            user:_id, 
            productId:good_id,
            createtime:createdate, 
            comment:commenttextarea
         });
        res.status(201).json({ comment });
    } catch (error) {
        console.log(error.stack);
    }
  });
  
  module.exports = router;