const signUp = (req, res) => {
  const { username, email, password, roles } = req.body
  
  new User({
    username,
    email,
    password
  })

  res.json('signup')
}

const signIn = (req, res) => {}


module.exports = {
  signUp,
  signIn
}