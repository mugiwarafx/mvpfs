const router = require('express').Router()

const Session = require('../models/session')
const User = require('../models/user')

const { tokenIsValid } = require('../utils/middleware')

router.delete('/', tokenIsValid, async (req, res) => {
  const user = await User.findByPk(req.decodedToken.id)

  await Session.destroy({
    where: {
      userId: user.id,
      value: req.get('authorization').substring(7),
    },
  })

  res.status(204).end()
})

module.exports = router
