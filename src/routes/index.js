const express = require('express')
const { signIn, signUp } = require('../controller/Users.controller')
const { verifyToken } = require('../middlewares')
const AuthRouter = express.Router()

AuthRouter
  .post('/signin', verifyToken, signIn)
  .post('/signup', signUp)





module.exports = AuthRouter
