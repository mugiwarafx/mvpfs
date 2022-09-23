import axios from 'axios'

const logout = async (token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  console.log('logoutService credentials', token)
  const response = await axios.delete('http://localhost:5000/api/logout', { headers })
  console.log('logoutService response', response)
  return response.data
}

export default { logout }
