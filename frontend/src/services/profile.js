import axios from 'axios'

const getProfile = async (token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  console.log('getProfile token', token)
  const response = await axios.get('http://localhost:5000/api/users/profile', { headers })
  console.log('getProfile response', response)
  return response.data
}

export default { getProfile }
