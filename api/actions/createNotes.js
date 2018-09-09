const NotesSchema = require('../dbModels/notesModel')

const createNotes = (request, response) => {
  insertNewNoteToDb(request.body)
    .then(sendResponse.bind(null, response))
    .catch(treatError.bind(null, response))
}

const insertNewNoteToDb = noteDetails => {
  return new Promise((resolve, reject) => {
    let newUser = new NotesSchema(noteDetails)
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
  switch (err.code) {
    case 11000:
      response.status(409).send('User already exist')
      break
    default:
      response.status(500).send('Error on database insert')
  }
}

module.exports = createNotes
