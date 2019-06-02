var express = require('express');
var router = express.Router();
var multer = require('multer');

const {
    createProduct,
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
    const { productsname, type, itemquantity, sort, subtype, iteminfotextarea, price } = req.body;
    
    const fileNames = req.files.map(function(file) {
      return '/images/upload/' + file.filename;
    });
    
   const monthNames = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月',];
    var temp = new Date();
    const createdate = temp.getFullYear() + "-" + monthNames[temp.getMonth()] + "-" + temp.getDate() + "日 " +temp.getHours() + ":" + temp.getMinutes() ;
    const product = await createProduct({ 
      user: _id,
        productsname:productsname, 
        createdate:createdate,
        type:type, 
        itemquantity, 
        sort, 
        subtype, 
        iteminfotextarea,
        price,
        fileNames,
    });

    res.status(201).json({ product });
  } catch (error) {
      console.log(error.stack);
  }
});

module.exports = router;
