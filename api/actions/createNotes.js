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

const sendResponse = (response, note) => {
  response.status(200).send(note)
}

const treatError = (response, err) => {
  switch (err.code) {
    default:
      response.status(500).send('Error on database insert')
  }
}

module.exports = createNotes
