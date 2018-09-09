const UserSchema = require('../dbModels/userModel')

const createUser = (request, response) => {
  insertNewUserToDb(request.body)
    .then(sendResponse.bind(null, response))
    .catch(treatError.bind(null, response))
}

const insertNewUserToDb = userDetails => {
  return new Promise((resolve, reject) => {
    let newUser = new UserSchema(userDetails)
    newUser.save((error, data) => {
      if (error) reject(error)
      resolve(data)
    })
  })
}

const sendResponse = (response, user) => {
  response.status(200).send(user)
}

const treatError = (response, err) => {
  console.log('createUsersAction)', err)
  switch (err.code) {
    case 11000:
      response.status(409).send('User already exist')
      break
    default:
      response.status(500).send('Error on database insert')
  }
}

module.exports = createUser
