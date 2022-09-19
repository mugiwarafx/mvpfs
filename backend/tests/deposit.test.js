const app = require('../index')
const request = require('supertest')
const User = require('../models/user')

const api = request.agent(app)

describe('PUT to deposite /api/deposite/:id', () => {
  it('Responds with user is not a buyer', async () => {
    const seller = await api.post('/api/login').send({ username: 'seller', password: 'seller' })

    const user = await User.findOne({ where: { username: seller.body.username } })

    await api.auth(`${seller.body.token}`, { type: 'bearer' })

    const result = await api
      .put(`/api/users/deposite/${user.id}`)
      .send({})
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('user is not a buyer')
  })

  it('Responds with the coins allowed [5, 10, 20, 50, 100]', async () => {
    const buyer = await api.post('/api/login').send({ username: 'buyer', password: 'buyer' })

    const user = await User.findOne({ where: { username: buyer.body.username } })

    await api.auth(`${buyer.body.token}`, { type: 'bearer' })

    const result = await api
      .put(`/api/users/deposite/${user.id}`)
      .send({})
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('allowed coins: 5, 10, 20, 50, 100')
  })

  it('Responds with HTTP code 200', async () => {
    const buyer = await api.post('/api/login').send({ username: 'buyer', password: 'buyer' })

    const user = await User.findOne({ where: { username: buyer.body.username } })

    await api.auth(`${buyer.body.token}`, { type: 'bearer' })

    await api
      .put(`/api/users/deposite/${user.id}`)
      .send({
        deposite: 10,
      })
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
})
