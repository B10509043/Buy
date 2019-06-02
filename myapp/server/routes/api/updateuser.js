var express = require('express');
var router = express.Router();
var multer = require('multer');

const {
    updateUser,
} = require('../../stores/user');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, __dirname + '../../../../public/images/upload');
  },
  filename: function(req, file, cb){
    console.log(file.originalname);
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

//const upload = multer({ dest: '../../../public/images/upload' });

router.post('/', upload.array('pic', 1), async function(req, res, next) {
  try {
     
    
   
    const { userId,username,phonenumber, password} = req.body;

    const userfileNames = req.files.map(function(file) {
      return '/images/upload/' + file.filename;
    });
    console.log("hello")
    console.log(req.body)

    const user = await updateUser({
      _id:userId
    },{
        username, 
        password, 
        phonenumber,
        userfileNames,
    });

    req.session.user = user;

    res.status(201).json({ user });
  } catch (error) {
      console.log(error.stack);
  }
});

module.exports = router;
