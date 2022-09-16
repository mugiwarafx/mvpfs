const Sequelize = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './data/app.sqlite',
})

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate()
    console.log('🗄  sqlite connected')
  } catch (err) {
    console.log('connecting database failed')
    return process.exit(1)
  }

  return null
}

module.exports = { connectToDatabase, sequelize }
