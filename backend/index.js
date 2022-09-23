const express = require('express')
const app = express()
const cors = require('cors')
// require('express-async-errors') [unmantained]
const middleware = require('./utils/middleware')
const { PORT } = require('./utils/config')
const { connectToDatabase } = require('./utils/db')

const usersRouter = require('./controllers/users')
const productsRouter = require('./controllers/products')
const loginRouter = require('./controllers/login')
const logoutRouter = require('./controllers/logout')

module.exports = app

app.use(cors())
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/products', productsRouter)
app.use('/api/login', loginRouter)
app.use('/api/logout', logoutRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

const start = async () => {
  await connectToDatabase()
  if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => console.log(`💻 express running on port ${PORT}`))
  } else if (process.env.NODE_ENV == 'production') {
    app.listen(PORT, () => {
      console.log(`💻 express running on port ${PORT}`)
    })
  }
}

start()
