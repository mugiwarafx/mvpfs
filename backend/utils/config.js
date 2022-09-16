require('dotenv').config()

module.exports = {
  DATABASE_URL: '../data/app.sqlite',
  PORT: process.env.PORT || 5000,
}
