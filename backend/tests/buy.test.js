const app = require('../index')
const request = require('supertest')
const User = require('../models/user')

const api = request.agent(app)

describe('PUT to deposite /api/buy/:id', () => {
  it('Responds with product indentifier is missing', async () => {
    const buyer = await api.post('/api/login').send({ username: 'buyer', password: 'buyer' })

    const user = await User.findOne({ where: { userUsername: buyer.body.username } })

    await api.auth(`${buyer.body.token}`, { type: 'bearer' })

    const result = await api
      .put(`/api/users/buy/${user.userId}`)
      .send({})
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('product identifier is missing')
  })

  it('Responds with body amount is missing', async () => {
    const buyer = await api.post('/api/login').send({ username: 'buyer', password: 'buyer' })

    const user = await User.findOne({ where: { userUsername: buyer.body.username } })

    await api.auth(`${buyer.body.token}`, { type: 'bearer' })

    const result = await api
      .put(`/api/users/buy/${user.userId}`)
      .send({
        productId: 1,
      })
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('product amount is missing')
  })

  it('Responds with body amount is missing', async () => {
    const buyer = await api.post('/api/login').send({ username: 'buyer', password: 'buyer' })

    const user = await User.findOne({ where: { userUsername: buyer.body.username } })

    await api.auth(`${buyer.body.token}`, { type: 'bearer' })

    const result = await api
      .put(`/api/users/buy/${user.userId}`)
      .send({
        productId: 1,
      })
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('product amount is missing')
  })

  it('Responds with not enough stock', async () => {
    const buyer = await api.post('/api/login').send({ username: 'buyer', password: 'buyer' })

    const user = await User.findOne({ where: { userUsername: buyer.body.username } })

    await api.auth(`${buyer.body.token}`, { type: 'bearer' })

    const result = await api
      .put(`/api/users/buy/${user.userId}`)
      .send({
        productId: 1,
        amount: 9999,
      })
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('not enough stock')
  })

  it('Responds with user is not a buyer', async () => {
    const seller = await api.post('/api/login').send({ username: 'seller', password: 'seller' })

    const user = await User.findOne({ where: { userUsername: seller.body.username } })

    await api.auth(`${seller.body.token}`, { type: 'bearer' })

    const result = await api
      .put(`/api/users/buy/${user.userId}`)
      .send({ productId: 1, amount: 1 })
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('user is not a buyer')
  })

  it('Responds with not enough money', async () => {
    const buyer = await api.post('/api/login').send({ username: 'buyer', password: 'buyer' })

    const user = await User.findOne({ where: { userUsername: buyer.body.username } })

    await api.auth(`${buyer.body.token}`, { type: 'bearer' })

    const result = await api
      .put(`/api/users/buy/${user.userId}`)
      .send({ productId: 5, amount: 5000 })
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('not enough money')
  })

  it('Responds with HTTP code 200', async () => {
    const buyer = await api.post('/api/login').send({ username: 'buyer', password: 'buyer' })

    const user = await User.findOne({ where: { userUsername: buyer.body.username } })

    await api.auth(`${buyer.body.token}`, { type: 'bearer' })

    await api
      .put(`/api/users/buy/${user.userId}`)
      .send({
        productId: 1,
        amount: 1,
      })
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
})
