const NotesSchema = require('../dbModels/notesModel')

const getNotes = (request, response) => {
  getNotesFromDB(request.params.email)
    .then(sendResponse.bind(null, response))
    .catch(handleError.bind(null, response))
}

const getNotesFromDB = (userEmail) => {
  console.log(userEmail)
  return new Promise((resolve, reject) => {
    NotesSchema.find({email: userEmail}, (error, data) => {
      if (error) reject(error)
      resolve(data)
    })
  })
}

const sendResponse = (response, users) => {
  response.status(200).send(users)
}

const handleError = (response, err) => {
  console.log('(getNotes)ERROR->', err)
  response.status(500).send('Error on get users')
}

module.exports = getNotes
