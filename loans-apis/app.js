var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


//Connect database with mongoose

const mongoURI = 'mongodb+srv://rsanghvi2712:Raj%402712@cluster0.owsw8yh.mongodb.net/Loanmanager';
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB database connected'))
  .catch(err => console.error(err));

  
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var customersRouter = require('./routes/customers');
var loansRouter = require('./routes/loans');
var invoicesRouter = require('./routes/invoices');
var paymentsRouter = require('./routes/payments');

var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.get('/', function(req, res){
  res.render('home', {
    title: "Welcome to Home page"
  });
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/customers', customersRouter);

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
