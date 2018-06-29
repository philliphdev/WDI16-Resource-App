require('dotenv').config()

const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose')
const path = require('path');


const indexRouter = require('./routes/indexRoute');
const usersRouter = require('./routes/usersRoute');
const resourceRouter = require('./routes/resourceRoute');

const app = express();

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
db.on('error', err => {
  console.log(err)
})

db.on('open', () => {
  console.log('Connected to MongoDB')
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(__dirname + '/client/build/'))

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

app.use('/', indexRouter);
app.use('/api/users/:userId/resources', resourceRouter)
app.use('/api/adduser', usersRouter)
app.use('/api/users', usersRouter)
// app.use('/api/users/:userId/resources/:resourceId', resourceRouter)



// app.use('/api/users/:userId', usersRouter)


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
