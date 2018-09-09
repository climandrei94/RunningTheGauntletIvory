const UserSchema = require('../dbModels/userModel')

const getUsers = (request, response) => {
  getUsersFromDB()
    .then(sendResponse.bind(null, response))
    .then(handleError.bind(null, response))
}

const getUsersFromDB = () => {
  return new Promise((resolve, reject) => {
    UserSchema.find((error, data) => {
      if (error) reject(error)
      resolve(data)
    })
  })
}

const sendResponse = (response, users) => {
  response.status(200).send(users)
}

const handleError = (response, err) => {
  console.log('(getUsersAction)ERROR->', err)
  response.status(500).send('Error on get users')
}

module.exports = getUsers
