import React from 'react'
import ReactDOM from 'react-dom'

function Mwl() {
  return <div id='madewithlove'>made with ❤️ from Barcelona</div>
}

export default function MwlRenderer() {
  return ReactDOM.createPortal(<Mwl />, document.body)
}
