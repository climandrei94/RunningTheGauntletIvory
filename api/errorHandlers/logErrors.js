function logErrors (err, request, response, next) {
  console.log('log error', err)
  next(err)
}

module.exports = logErrors
