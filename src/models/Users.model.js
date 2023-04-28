const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    password : {
      type: String,
      required: true,
      trim: true
    },
    roles:[{ 
      type: mongoose.Schema.Types.ObjectId
    }]
    
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePassword = async (password, recievedPassword) => {
  return await bcrypt.compare(password, recievedPassword)
}

const User = mongoose.model('User', userSchema)
module.exports = User