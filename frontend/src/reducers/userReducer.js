import { createSlice } from '@reduxjs/toolkit'

import loginService from '../services/login'
import logoutService from '../services/logout'
import userService from '../services/user'
import profileService from '../services/profile'

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      return (state = action.payload)
    },
  },
})

export const { setUser, logout } = userSlice.actions

export const initializeUser = () => {
  return async (dispatch) => {
    const loggedInUser = await userService.getUser()
    if (loggedInUser) {
      const user = await profileService.getProfile(loggedInUser.token)
      user.token = loggedInUser.token
      user.isAuthenticated = loggedInUser.token ? true : false
      console.log('initializeUser', user)
      dispatch(setUser(user))
    } else {
      dispatch(setUser({}))
    }
  }
}

export const loginUser = (u, p) => {
  return async (dispatch) => {
    const credentials = { username: u, password: p }
    try {
      console.log('reducer, loginUser', credentials)
      const user = await loginService.login(credentials)
      await userService.setUser(user)
      const loggedInUser = userService.getUser()
      console.log('loggedInUser', loggedInUser)
      user.isAuthenticated = loggedInUser.token ? true : false
      dispatch(setUser(user))
      console.log(`Welcome ${user.username}`)
    } catch (error) {
      console.log('wrong username/password')
    }
  }
}

export const logoutUser = (user) => {
  const token = user.token
  return async (dispatch) => {
    try {
      const response = await logoutService.logout(token)
      await userService.clearUser(user)
      dispatch(setUser({}))
      console.log('reducer logoutUser', response)
    } catch (error) {
      console.log('logoutUser error', error)
    }
  }
}

export default userSlice.reducer
