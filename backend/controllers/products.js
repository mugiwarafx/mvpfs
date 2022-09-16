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

  if (user.userRole === 'seller') {
    const product = new Product({
      productSellerId: req.decodedToken.id,
      productName: body.name,
      productAmountAvailable: body.amountAvailable,
      productCost: body.cost,
    })

    const savedProduct = await product.save()
    res.status(201).json(savedProduct)
  } else {
    res.status(404).end('this user have no permissions to sell products')
  }
})

router.put('/:id', tokenIsValid, sessionIsValid, productFinder, userIsOwner, async (req, res) => {
  const b = req.body
  const p = req.product

  if (p) {
    b.name ? (p.productName = b.name) : null
    b.amountAvailable ? (p.amountAvailable = b.amountAvailable) : null
    b.cost ? (p.productCost = b.cost) : null
    await p.save()
    res.json(p)
  } else {
    res.status(404).end()
  }
})

router.delete('/:id', tokenIsValid, sessionIsValid, productFinder, userIsOwner, async (req, res) => {
  let name = null

  if (req.product) {
    name = req.product.productName
    await req.product.destroy()
  }

  if (name) {
    res.json(name + ' has been deleted')
  } else {
    res.status(404).end()
  }
})

module.exports = router
