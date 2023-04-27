const Roles = require("../models/Roles.model")

const createRoles = async () => {
  try {
    const count = await Roles.estimatedDocumentCount()
    if (count > 0) {
      return
    } else {
      const values = await Promise.all([
        new Roles({ name: 'admin' }).save(),
        new Roles({ name: 'moderator' }).save(),
        new Roles({ name: 'user' }).save()
      ])

      console.log(values)
    }
  } catch (error) {
    console.log(error)
  }
}


module.exports = { createRoles }