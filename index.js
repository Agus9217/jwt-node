require('dotenv').config()
const express = require('express');
const dbConnect = require('./src/config/database');
const { createRoles } = require('./src/libs/init');
const AuthRouter = require('./src/routes');
const app = express();

const PORT = process.env.PORT

app.use(express.json())
app.use('/api/auth', AuthRouter)
createRoles()


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})

dbConnect()