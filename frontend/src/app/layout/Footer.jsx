import React from 'react'

import instagram from '../../assets/icons8-instagram-48.png'
import twitter from '../../assets/icons8-twitter-48.png'
import github from '../../assets/icons8-github-48.png'
import corazones from '../../assets/icons8-corazones-48.png'

export function Footer() {
  return (
    <footer
      style={{
        borderTop: '2px solid',
      }}
    >
      <img src={instagram} />
      <img src={twitter} />
      <img src={github} />
      <img src={corazones} />
    </footer>
  )
}
