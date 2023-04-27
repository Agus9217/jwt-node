const mongoose = require('mongoose')

const rolesSchema = new mongoose.Schema(
  {
    name: {
      type: String
    }
  },
  {
    versionKey: false
  }
)

const Roles = mongoose.model('Roles', rolesSchema)
module.exports = Roles