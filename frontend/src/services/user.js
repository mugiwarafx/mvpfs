let token = null

const STORAGE_KEY = 'loggedAppUser'

const setUser = (user) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
  window.localStorage.setItem('userToken', JSON.stringify(user.token))
  token = user.token
  console.log('userService, token', token)
}

const getUser = () => {
  const loggedUserJSON = window.localStorage.getItem(STORAGE_KEY)
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    token = user.token
    return user
  }

  return null
}

const clearUser = () => {
  localStorage.clear()
  token = null
}

const getToken = () => token

export default {
  setUser,
  getUser,
  clearUser,
  getToken,
}
