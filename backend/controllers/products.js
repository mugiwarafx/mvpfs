const router = require('express').Router()

const Product = require('../models/product')
const User = require('../models/user')

const { tokenIsValid, sessionIsValid, productFinder, userIsOwner } = require('../utils/middleware')

router.get('/', async (req, res) => {
  const products = await Product.findAll()
  res.json(products)
})

router.get('/:id', productFinder, async (req, res) => {
  if (req.product) {
    res.json(req.product)
  } else {
    res.status(404).end()
  }
})

router.post('/', tokenIsValid, sessionIsValid, async (req, res) => {
  const body = req.body
  const user = await User.findByPk(body.userId)

  if (user.role === 'seller') {
    const product = new Product({
      sellerId: req.decodedToken.id,
      name: body.name,
      amountAvailable: body.amountAvailable,
      cost: body.cost,
    })

    const savedProduct = await product.save()
    res.status(201).json(savedProduct)
  } else {
    res.status(404).end('this user have no permissions to sell products')
  }
})

router.put('/:id', tokenIsValid, sessionIsValid, productFinder, userIsOwner, async (req, res) => {
  const body = req.body
  const product = req.product

  if (product) {
    body.name ? (product.name = body.name) : null
    body.amountAvailable ? (product.amountAvailable = body.amountAvailable) : null
    body.cost ? (product.cost = body.cost) : null
    await product.save()
    res.json(product)
  } else {
    res.status(404).end()
  }
})

router.delete('/:id', tokenIsValid, sessionIsValid, productFinder, userIsOwner, async (req, res) => {
  let name = null

  if (req.product) {
    name = req.product.name
    await req.product.destroy()
  }

  if (name) {
    res.json(name + ' has been deleted')
  } else {
    res.status(404).end()
  }
})

module.exports = router
