let express = require('express')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let userRoutes = require('./routes/userRoutes')
let notesRoutes = require('./routes/notesRoutes')
let logErrors = require('./errorHandlers/logErrors')
let errorHandler = require('./errorHandlers/errorHandler')

const mongooseURL = 'mongodb://localhost:27017/myApplication'
const errorMessages = {
  errorConnectingToDB: {err: `Can't connect to database`}
}

let app = express()
app.use(bodyParser.json())
app.use('/user', userRoutes)
app.use('/notes', notesRoutes)
app.use(logErrors)
app.use(errorHandler)

mongoose.set('useNewUrlParser', true)
mongoose.connect(mongooseURL, (error, response) => {
  if (error) throw (errorMessages.errorConnectingToDB)
  else console.log('Connected with succes to mongoDB')
})

app.listen(3000, () => {
  console.log('Server started on localhost:3000')
})
