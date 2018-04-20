var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Our server start function
module.exports = function startServer(port, path, callback)
{
  var indexRouter = require('./routes/index');
  var app = express();

  // view engine setup, views in app/assets as brunch documentation says.
  app.set('views', __dirname+'/app/assets/');
  // I chose Hogan.js but you can change to jade,pug, etc. Just change app/assets templates.
  app.set('view engine', 'hjs');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(__dirname+'/public/')));

  app.use('/', indexRouter);
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

  //HTTP server running on port specified at brunch-config.js, firstable verify a PORT envirionment variable
  app.listen(process.env.PORT || port,callback);

}
