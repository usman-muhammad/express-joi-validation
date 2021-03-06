const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const { errors } = require('celebrate')

const joiPrettyErrorsMessages = require('./app/utils/joiPrettyErrorsMessages')
const indexRouter = require('./app/routes/index')
const usersRouter = require('./app/routes/users')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use(async (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // Check validation error form JOi
  if (err.isJoi) {
    return res.status(400).json(await joiPrettyErrorsMessages(err))
  }
  // render the error page
  res.status(err.status || 500)
  res.render('error')
})
app.use(errors())
module.exports = app
