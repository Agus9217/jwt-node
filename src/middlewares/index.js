const { verifyToken } = require("./authJwt");

const middlewares = {
  verifyToken
}

module.exports = middlewares