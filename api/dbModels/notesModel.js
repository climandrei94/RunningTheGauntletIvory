const mongoose = require('mongoose')
const Schema = mongoose.Schema

let notesSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: [true, 'This email exists already']
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})

let Notes = mongoose.model('notes', notesSchema)
module.exports = Notes
