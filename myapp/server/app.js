var createError = require('http-errors');
var express = require('express');
var path = require('path');

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressSession = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(expressSession({
  secret: 'secret',
  name: 'buy',
  resave: true,
  saveUninitialized: true,
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', require('./routes/product'))
app.use('/login', require('./routes/login'))
app.use('/logout', require('./routes/logout'))
app.use('/register', require('./routes/register'))
app.use('/api/users', require('./routes/api/user'))
app.use('/api/comment', require('./routes/api/comment'))
app.use('/api/products', require('./routes/api/product'))
app.use('/clothing_Decorations', require('./routes/clothing_Decorations'))
app.use('/clothing_Femaleclothing', require('./routes/clothing_Femaleclothing'))
app.use('/clothing_Maleclothing', require('./routes/clothing_Maleclothing'))
app.use('/elctronic_Computer', require('./routes/elctronic_Computer'))
app.use('/elctronic_Mobile', require('./routes/elctronic_Mobile'))
app.use('/elctronic_Photographing', require('./routes/elctronic_Photographing'))
app.use('/book_Disk', require('./routes/book_Disk'))
app.use('/book_Music', require('./routes/book_Music'))
app.use('/book_Otherbook', require('./routes/book_Otherbook'))
app.use('/book_Textbook', require('./routes/book_Textbook'))
app.use('/book_MIS', require('./routes/book_MIS'))
app.use('/book_IM', require('./routes/book_IM'))
app.use('/book_BM', require('./routes/book_BM'))
app.use('/book_AFL', require('./routes/book_AFL'))
app.use('/book_CD', require('./routes/book_CD'))
app.use('/book_EM', require('./routes/book_EM'))
app.use('/book_ID', require('./routes/book_ID'))
app.use('/book_IE', require('./routes/book_IE'))
app.use('/book_M', require('./routes/book_M'))
app.use('/book_ME', require('./routes/book_ME'))
app.use('/makeup_makeup', require('./routes/makeup_makeup'))
app.use('/others_others', require('./routes/others_others'))
app.use('/life_daily', require('./routes/life_daily'))
app.use('/life_food', require('./routes/life_food'))
app.use('/houserent_houserent', require('./routes/houserent_houserent'))
app.use('/api/send', require('./routes/api/send'))
app.use('/find', require('./routes/find'))



app.use(require('./lib/check-login'));
app.use('/sell', require('./routes/sell'))
app.use('/membermarket', require('./routes/membermarket'))
app.use('/memberindex', require('./routes/memberindex'))
app.use('/memberlist', require('./routes/memberlist'))
app.use('/membernotification', require('./routes/membernotification'))

app.use('/logout', require('./routes/logout'))
app.use('/modifyproduct', require('./routes/modifyproduct'))
app.use('/api/delproduct', require('./routes/api/delproduct'))
app.use('/api/updateproduct', require('./routes/api/updateproduct'))
app.use('/api/updatequantity', require('./routes/api/updatequantity'))
app.use('/api/updateuser', require('./routes/api/updateuser'))
app.use('/api/cart', require('./routes/api/cart'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
