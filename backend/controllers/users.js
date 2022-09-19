const router = require('express').Router()
const bcrypt = require('bcrypt')

const User = require('../models/user')
const Product = require('../models/product')

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
    username: username,
    password: passwordHash,
    role: role,
    deposite: deposite,
  })

  const savedUser = await user.save()
  res.status(201).json(savedUser)
})

router.put('/:id', tokenIsValid, sessionIsValid, async (req, res) => {
  const user = await User.findByPk(req.params.id)
  if (user) {
    const body = req.body
    body.username ? (user.username = body.username) : null
    await user.save()
    res.json(user)
  } else {
    res.status(404).end()
  }
})

router.put('/deposite/:id', tokenIsValid, sessionIsValid, async (req, res) => {
  const user = await User.findByPk(req.params.id)
  const coins = [5, 10, 20, 50, 100]

  if (user.role !== 'buyer') {
    return res.status(400).json({ error: 'user is not a buyer' })
  }

  const body = req.body

  if (!coins.includes(body.deposite)) {
    return res.status(400).json({ error: 'allowed coins: 5, 10, 20, 50, 100' })
  }

  user.deposite += body.deposite
  await user.save()

  res.json(user)
})

router.put('/buy/:id', tokenIsValid, sessionIsValid, async (req, res) => {
  const body = req.body

  if (!body.productId) {
    return res.status(400).json({ error: 'product identifier is missing' })
  }

  if (!body.amount) {
    return res.status(400).json({ error: 'product amount is missing' })
  }

  const product = await Product.findByPk(body.productId)

  if (body.amount > product.amountAvailable) {
    return res.status(400).json({ error: 'not enough stock' })
  }

  let total = 0
  total = body.amount * product.cost

  const user = await User.findByPk(req.params.id)

  if (user.role !== 'buyer') {
    return res.status(400).json({ error: 'user is not a buyer' })
  }

  if (user.deposite < total) {
    return res.status(400).json({ error: 'not enough money' })
  }

  const change = user.deposite - total
  user.deposite -= total
  await user.save()

  res.json({
    totalCost: total,
    change: change,
  })
})

router.put('/reset/:id', tokenIsValid, sessionIsValid, async (req, res) => {
  const user = await User.findByPk(req.params.id)
  if (user) {
    user.deposite = 0
    await user.save()
    res.json(user)
  } else {
    res.status(404).end()
  }
})

router.delete('/:id', tokenIsValid, sessionIsValid, async (req, res) => {
  const user = await User.destroy({ where: { id: req.params.id } })
  if (user) {
    res.json('your username and all related data have been deleted')
  } else {
    res.status(404).end()
  }
})

module.exports = router
