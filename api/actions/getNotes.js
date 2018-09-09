const NotesSchema = require('../dbModels/notesModel')

const getNotes = (request, response) => {
  getNotesFromDB(request.params.email)
    .then(sendResponse.bind(null, response))
    .catch(handleError.bind(null, response))
}

const getNotesFromDB = (userEmail) => {
  return new Promise((resolve, reject) => {
    NotesSchema.find({email: userEmail}, (error, data) => {
      if (error) reject(error)
      resolve(data)
    })
  })
}

const sendResponse = (response, notes) => {
  response.status(200).send(notes)
}

const handleError = (response, err) => {
  console.log('(getNotes)ERROR->', err)
  response.status(500).send('Error on get notes')
}

module.exports = getNotes
