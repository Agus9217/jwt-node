const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
  note: {
    type: String
  }
},
{
  timestamps: true,
  versionKey: false
})

module.exports = mongoose.model('note', notesSchema)