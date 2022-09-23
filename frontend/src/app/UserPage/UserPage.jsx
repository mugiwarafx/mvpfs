import React, { useEffect } from 'react'
import { Header, Footer } from '../layout'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function UserPage() {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    if (!user.id) {
      navigate('/')
    }
  }, [user, navigate])

  return (
    <>
      <Header />
      <main>
        <section>
          <h1>@the_place_to_be/user_page</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cumque libero suscipit dolore. Vero suscipit assumenda ratione,
            perferendis eum tempore nulla, mollitia tempora ipsa quis neque. Ab provident eos iste!
          </p>
          {Object.entries(user).map((el) => (
            <p key={el[0]}>
              <span>{el[0]}</span> &nbsp;
              {el[1]}
            </p>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
