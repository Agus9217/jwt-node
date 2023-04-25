const mongoose = require('mongoose')

const DB_URI = process.env.DB_URI

const dbConnect = () => {
  mongoose.connect(DB_URI,
    {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    },
    console.log('###### DATABASE IS RUNNING ######')
  ).catch(err => {
    console.log(`###### DATABASE ERROR: ${err}`)
  })
}

module.exports = dbConnect