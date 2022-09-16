const router = require('express').Router()
const bcrypt = require('bcrypt')

const User = require('../models/user')

const { tokenIsValid, sessionIsValid } = require('../utils/middleware')

router.get('/:id', tokenIsValid, sessionIsValid, async (req, res) => {
  const user = await User.findByPk(req.params.id)
  if (user) {
    res.json(user)
  } else {
    res.status(404).end()
  }
})

router.post('/', async (req, res) => {
  const { username, password, role, deposite } = req.body
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    userUsername: username,
    userPassword: passwordHash,
    userRole: role,
    userDeposite: deposite,
  })

  const savedUser = await user.save()
  res.status(201).json(savedUser)
})

router.put('/:id', tokenIsValid, sessionIsValid, async (req, res) => {
  const u = await User.findByPk(req.params.id)
  const b = req.body
  if (u) {
    b.username ? (u.userUsername = b.username) : null
    b.deposite ? (u.userDeposite = u.userDeposite + b.deposite) : null
    await u.save()
    res.json(u)
  } else {
    res.status(404).end()
  }
})

router.delete('/:id', tokenIsValid, sessionIsValid, async (req, res) => {
  const user = await User.destroy({
    where: { userId: req.params.id },
  })
  if (user) {
    res.json('Your user and all its data related, has been deleted')
  } else {
    res.status(404).end()
  }
})

module.exports = router
