import * as React from 'react'

import { Header, Footer } from './app/layout'

import styled from 'styled-components'

import './App.css'

const SectionStyled = styled.section``

export default function App() {
  return (
    <>
      <Header />
      <main>
        <SectionStyled>
          <h1>@the_place_to_be</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cumque libero suscipit dolore. Vero suscipit assumenda ratione,
            perferendis eum tempore nulla, mollitia tempora ipsa quis neque. Ab provident eos iste!
          </p>
        </SectionStyled>
        <SectionStyled>
          <h2>/A place were sellers can sell 🪴</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cumque libero suscipit dolore. Vero suscipit assumenda ratione,
            perferendis eum tempore nulla, mollitia tempora ipsa quis neque. Ab provident eos iste!
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cumque libero suscipit dolore. Vero suscipit assumenda ratione,</p>
          <a id='cta-home' href='#'>
            You got it, you sell it!
          </a>
        </SectionStyled>
        <SectionStyled>
          <h2>/A place were buyers can buy 💅</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cumque libero suscipit dolore. Vero suscipit assumenda ratione,</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cumque libero suscipit dolore. Vero suscipit assumenda ratione,
            perferendis eum tempore nulla, mollitia tempora ipsa quis neque. Ab provident eos iste!
          </p>
          <a id='cta-home' className='cta-yellow' href='#'>
            You want it, you have it!
          </a>
        </SectionStyled>
      </main>
      <Footer />
    </>
  )
}
