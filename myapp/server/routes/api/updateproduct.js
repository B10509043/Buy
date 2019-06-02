var express = require('express');
var router = express.Router();
var multer = require('multer');

const {
    updateProduct,
} = require('../../stores/product');

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

// const upload = multer({ dest: '../../../public/images/upload' });

router.post('/', upload.array('pic', 4), async function(req, res, next) {
  try {
     
    const { _id,username } = req.session.user;
    console.log(`_id ${_id}`)
    const {good_id, productsname, type, itemquantity, sort, subtype, iteminfotextarea, price } = req.body;

    const fileNames = req.files.map(function(file) {
      return '/images/upload/' + file.filename;
    });
    console.log("hello")
    console.log(req.body)

    const product = await updateProduct({
      _id:good_id
    },{
      userId: _id,
      username:username,
        productsname:productsname, 
        type:type, 
        itemquantity:itemquantity, 
        sort:sort, 
        subtype:subtype, 
        iteminfotextarea:iteminfotextarea,
        price:price,
        fileNames:fileNames,
    });

    res.status(201).json({ product });
  } catch (error) {
      console.log(error.stack);
  }
});

module.exports = router;
