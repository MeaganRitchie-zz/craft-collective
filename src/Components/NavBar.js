import React from 'react'
import Logo from '../images/pencil-and-paint-brush.png'

export default function NavBar() {
  return (
    <header className="nav-bar">
      <p>Craft Collective</p>
      <nav>
        <ul>
          <li><a href="#">browse crafts</a></li>
          <li><a href="#">your crafts</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>


    </header>
  )
}
