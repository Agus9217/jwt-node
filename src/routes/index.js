const express = require('express')
const { signIn, signUp } = require('../controller/Users.controller')
const AuthRouter = express.Router()

AuthRouter
  .post('/signin', signIn)
  .post('/signup', signUp)





module.exports = AuthRouter
