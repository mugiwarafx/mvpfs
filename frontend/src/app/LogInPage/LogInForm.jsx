import React from 'react'
import { useState } from 'react'
import { loginUser } from '../../reducers/userReducer'
import { useDispatch } from 'react-redux'

export function LogInForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('component/LogInForm', username, password)
    dispatch(loginUser(username, password))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='username' autoComplete='username' onChange={({ target }) => setUsername(target.value)} />
      <input type='password' name='password' autoComplete='new-password' onChange={({ target }) => setPassword(target.value)} />
      <button type='submit'>Log In</button>
    </form>
  )
}
