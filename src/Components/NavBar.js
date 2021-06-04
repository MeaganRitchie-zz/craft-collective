import React from 'react'
import Logo from '../images/pencil-and-paint-brush.png'
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import ScallopedHeader from './ScallopedHeader'
import BrowseCrafts from './BrowseCrafts'

export default function NavBar(props) {

  const logout = () => {
    localStorage.removeItem("token")
    props.setUser({})
  }

  return (
    <header className="nav-bar">
      <p><img className="nav-bar-logo" src={Logo} alt="logo"></img>Craft Collective</p>
      <nav>
        <ul>
          <Router>
            <li><Link to="/browse">BROWSE</Link></li>
            <li><Link to="/profile">YOUR COLLECTION</Link></li>
            <li><Link to="/" onClick={logout}>LOGOUT</Link></li>
            <Switch>
              <Router path="/browse">
                <BrowseCrafts />
              </Router>
              <Router path="/profile">
                <ScallopedHeader />
              </Router>
            </Switch>
          </Router>

        </ul>
      </nav>


    </header >
  )
}
