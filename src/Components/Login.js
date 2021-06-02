import React from 'react'
import Image from '../images/signinpage.jpg'
import Logo from '../images/pencil-and-paint-brush.png'
import { Component } from 'react'

export default class SignUp extends Component {

  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.signUp(this.state)
  }

  changeLoggedInState = () => {
    this.props.setIsLoggedIn(false)
  }

  render() {
    return (
      <div className="login-page">
        <img className="login-image" src={Image} alt="knitting" />
        <div className="outer-modal">
          <div id="login-form" className="main-form">
            <img className="logo" src={Logo} alt="pencil and paintbrush logo"></img>
            <div><input type="text" className="inp" placeholder="Username" /></div>
            <div><input type="password" className="inp" id="inputpswd" placeholder="Password" /></div>
            <div style={{ "text-align": "center" }}> <button className="button">Login</button></div>
            <hr></hr>
            <div style={{ "text-align": "center" }}> <button onClick={this.changeLoggedInState} className="button">Sign Up</button></div>
          </div>
        </div >
      </div>
    )
  }
}
