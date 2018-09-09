const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: [true, 'This email exists already']
  },
  password: {
    type: String,
    required: true
  }
})

let User = mongoose.model('users', userSchema)
module.exports = User
