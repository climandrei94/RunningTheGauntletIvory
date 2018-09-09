function errorHandler (err, request, response, next) {
  console.log('error handler', err)
  response.status(500).send('error')
  // response.render('error', {error: err})
}

module.exports = errorHandler
