const UserSchema = require('../dbModels/userModel')

const getUsers = (request, response) => {
  getUsersFromDB(request.params.email)
    .then(sendResponse.bind(null, response))
    .catch(handleError.bind(null, response))
}

const getUsersFromDB = (userData) => {
  return new Promise((resolve, reject) => {
    UserSchema.find({email: userData, password: '12345678'}, (error, data) => {
      if (error) reject(error)
      resolve(data.length)
    })
  })
}

const sendResponse = (response, users) => {
  response.status(200).send(users.toString())
}

const handleError = (response, err) => {
  console.log('(getUsersAction)ERROR->', err)
  response.status(500).send('Error on get users')
}

module.exports = getUsers
