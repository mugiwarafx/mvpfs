const express = require('express')
const app = express()
require('express-async-errors')

const middleware = require('./utils/middleware')
const { PORT } = require('./utils/config')
const { connectToDatabase } = require('./utils/db')

const usersRouter = require('./controllers/users')
const productsRouter = require('./controllers/products')
const loginRouter = require('./controllers/login')
const logoutRouter = require('./controllers/logout')

app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/products', productsRouter)
app.use('/api/login', loginRouter)
app.use('/api/logout', logoutRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    console.log(`💻 express running on port ${PORT}`)
  })
}

start()
