const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const loginRouter = require('express').Router()

const User = require('../models/user')
const Session = require('../models/session')

loginRouter.post('/', async (request, response) => {
  const { username, password } = request.body

  const user = await User.findOne({ where: { userUsername: username } })

  const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.userPassword)

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'Invalid username or password',
    })
  }

  const userForToken = {
    username: user.userUsername,
    id: user.userId,
  }

  const token = jwt.sign(userForToken, process.env.SECRET)

  await Session.create({
    sessionUserId: user.userId,
    sessionValue: token,
  })

  response.status(200).send({ token, username: user.userUsername })
})

module.exports = loginRouter
