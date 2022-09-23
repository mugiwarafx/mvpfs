import React from 'react'
import { Link } from 'react-router-dom'

export function LogInButton() {
  return (
    <button>
      <Link to='login'>Log In</Link>
    </button>
  )
}
