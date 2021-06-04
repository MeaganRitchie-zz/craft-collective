import React from 'react'
import Image from '../images/signinpage.jpg'
import Logo from '../images/pencil-and-paint-brush.png'
import { Component } from 'react'

export default class Login extends Component {

  state = {
    username: "",
    password: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  changeLoggedInState = () => {
    this.props.setIsLoggedIn(false)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.username, this.state.password)
  }

  render() {
    return (
      <div className="login-page">
        <img className="login-image" src={Image} alt="knitting" />
        <div className="outer-modal">
          <form onSubmit={this.handleSubmit} id="login-form" className="main-form">
            <img className="logo" src={Logo} alt="pencil and paintbrush logo"></img>
            <div><input name="username" value={this.state.username} className="inp" onChange={this.handleChange} placeholder="Username" /></div>
            <div><input type="password" name="password" value={this.state.password} className="inp" onChange={this.handleChange} placeholder="Password" /></div>
            {this.props.error ? <p style={{ "color": "rgb(196, 148, 115)" }}>{this.props.error}</p> : null}
            <div style={{ "textAlign": "center" }}> <input type="submit" value="Login" className="button" /></div>
            <hr></hr>
            <div style={{ "textAlign": "center" }}> <button onClick={this.changeLoggedInState} className="button">Sign Up</button></div>
          </form>
        </div >
      </div>
    )
  }
}
