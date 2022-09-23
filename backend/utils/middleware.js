require('dotenv').config()

const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const Session = require('../models/session')
const Product = require('../models/product')
const User = require('../models/user')

const tokenIsValid = async (req, res, next) => {
  const authorization = req.get('authorization')

  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    try {
      req.decodedToken = jwt.verify(authorization.substring(7), SECRET)
    } catch (error) {
      return res.status(401).json({ error: 'token invalid' })
    }
  } else {
    return res.status(401).json({ error: 'token missing' })
  }

  next()
}

const sessionIsValid = async (req, res, next) => {
  const session = await Session.findOne({
    where: { value: req.get('authorization').substring(7) },
  })

  if (!session) {
    return res.status(401).json({ error: 'session missing' })
  }

  let id = null

  if (req.baseUrl === '/api/products') {
    id = req.body.userId
  }

  if (req.baseUrl === '/api/users') {
    id = parseInt(req.params.id)
  }

  if (req.originalUrl === '/api/users/profile') {
    id = session.userId
  }

  if (id !== session.userId) {
    return res.status(401).json({ error: 'user session missing' })
  }

  req.loggedInUser = await User.findByPk(id)
  next()
}

const productFinder = async (req, res, next) => {
  req.product = await Product.findByPk(req.params.id)
  if (!req.product) {
    return res.status(400).send({ error: 'product does not exist' })
  }
  next()
}

const userIsOwner = async (req, res, next) => {
  if (req.body.userId !== req.product.sellerId) {
    return res.status(400).send({ error: 'user does not own this product' })
  }
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  console.log(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  } else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({
      error: 'invalid token',
    })
  }

  next(error)
}

module.exports = {
  unknownEndpoint,
  errorHandler,
  tokenIsValid,
  sessionIsValid,
  productFinder,
  userIsOwner,
}
