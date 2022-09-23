import React, { useEffect } from 'react'

import { LogInForm } from './LogInForm'
import { Header, Footer } from '../layout'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './css/login.css'

export function LogInPage() {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    if (user.id) {
      navigate('/user')
    }
  }, [user, navigate])

  return (
    <>
      <Header />
      <main>
        <section>
          <h1>@the_place_to_be/login</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cumque libero suscipit dolore. Vero suscipit assumenda ratione,
            perferendis eum tempore nulla, mollitia tempora ipsa quis neque. Ab provident eos iste!
          </p>
        </section>
        <section>
          <LogInForm />
        </section>
      </main>
      <Footer />
    </>
  )
}
