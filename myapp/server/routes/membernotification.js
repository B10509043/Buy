var express = require('express');
var router = express.Router();

const {
  getNotificationsByUserId,
  getboughtNotificationsByUserId,
} = require('../stores/notification');
const {
    getProductsByIds,
} = require('../stores/product');

router.get('/', async function(req, res, next) {
  try {
        const { user } = req.session;
        const { _id: userId } = user;
        const notifications = await getNotificationsByUserId(userId);
        const boughtnotification = await getboughtNotificationsByUserId(userId)
        console.log(notifications);
        console.log(boughtnotification)

        res.render('membernotification', {notifications, user, boughtnotification});
  } catch (error) {
      console.log(error.stack);
  }
});

module.exports = router;
