const User = require("../models/Users.model")
const JWT = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET

const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body
  
  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password)
  })

  const savedUser = await newUser.save()
  const token = JWT.sign({ id: savedUser._id }, SECRET_KEY, {
    expiresIn: 86400
  } )

  res.status(201).json({token})
}

const signIn = (req, res) => {}


module.exports = {
  signUp,
  signIn
}