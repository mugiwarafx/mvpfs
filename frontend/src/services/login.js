import axios from 'axios'

const login = async (credentials) => {
  console.log('loginService credentials', credentials)
  const response = await axios.post('http://localhost:5000/api/login', credentials)
  console.log('loginService response', response)
  return response.data
}

export default { login }
