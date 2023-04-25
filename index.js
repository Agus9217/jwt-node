require('dotenv').config()
const express = require('express');
const dbConnect = require('./src/config/database');
const app = express();

const PORT = process.env.PORT


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})

dbConnect()