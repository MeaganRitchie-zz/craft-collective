import React from 'react'
import Logo from '../images/pencil-and-paint-brush.png'

export default function NavBar(props) {

  const logout = () => {
    localStorage.removeItem("token")
    props.setUser({})
  }
  return (
    <header className="nav-bar">
      <p><img className="nav-bar-logo" src={Logo}></img>Craft Collective</p>
      <nav>
        <ul>
          <li><a href="#">BROWSE</a></li>
          <li><a href="#">YOUR COLLECTION</a></li>
          <li><a onClick={logout} href="#">LOGOUT</a></li>
        </ul>
      </nav>


    </header>
  )
}
