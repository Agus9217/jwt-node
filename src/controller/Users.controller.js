const Roles = require("../models/Roles.model")
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

  if(roles) {
    const foundRoles = await Roles.find({name: { $in: roles }})
    newUser.roles = foundRoles.map(role => role._id)
  } else {
    const role = await Roles.findOne({ name: 'user' })
    newUser.roles = [role._id]
  }

  const savedUser = await newUser.save()
  const token = JWT.sign({ id: savedUser._id }, SECRET_KEY, {
    expiresIn: 86400
  })

  console.log(savedUser)
  res.status(201).json({token})
}

const signIn = async (req, res) => {
  const userFound = await User.findOne({email: req.body.email}).populate('roles')
  if (!userFound) {
    return res.status(400).json({message: "User Not found"})
  }

  const matchPassword = await User.comparePassword(req.body.password, userFound.password)

  if (!matchPassword) {
    return res.status(401).json({token: "Null", message: "Invalid password"})
  }

  const token = JWT.sign({ id: userFound._id }, SECRET_KEY, {
    expiresIn: 86400
  })
  res.json({token})
}


module.exports = {
  signUp,
  signIn
}