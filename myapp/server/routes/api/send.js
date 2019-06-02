var express = require('express');
var router = express.Router();
const mailgun = require("mailgun-js");
const DOMAIN = "sandboxb75911debc6848d8a4f1d7a81544ea03.mailgun.org";
//const DOMAIN = "mail.ntust.edu.tw";
const mg = mailgun({apiKey: "66c49aabacef627b77b8ea9b2ba14f78-4a62b8e8-12482592", domain: DOMAIN});
function generateOTP() {
  var digits = '0123456789';
  let x = '';
  for (let i = 0; i < 4; i++) {
    x += digits[Math.floor(Math.random() * 10)];
  }
  return x;
}

router.post('/', function (req, res, next) {
  const { email } = req.body;
  const x = generateOTP();
  const data = {
    from: "Mailgun Sandbox <postmaster@sandboxb75911debc6848d8a4f1d7a81544ea03.mailgun.org>",
    to: email,
    subject: "Verification Code",
    text: 'This is the verification code in Tech2Buy:' + x
  };
  mg.messages().send(data, function (error, body) {
    console.log("訊息寄送",body);
  });
  
  res.status(200).json({ verificationCode: x });
});
module.exports = router;