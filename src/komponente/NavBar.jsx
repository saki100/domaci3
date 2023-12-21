import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
        <Link to="/">
      <h3>Pretraži činjenice</h3></Link>
      <Link to="/breeds">
      <button className='btnIstrazi'>Istraži rase</button>
      </Link>
    </div>
  )
}

export default NavBar
