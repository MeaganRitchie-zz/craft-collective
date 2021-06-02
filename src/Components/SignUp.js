import React from 'react'
import Image from '../images/signinpage.jpg'
import Logo from '../images/pencil-and-paint-brush.png'
import { Component } from 'react'
import ScallopedHeader from './ScallopedHeader'

export default class SigninModal extends Component {

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

  render() {
    return (
      <div className="login-page">
        <img className="login-image" src={Image} alt="knitting" />
        <div className="outer-modal">
          <form onSubmit={this.handleSubmit} id="signup-form" className="main-form">
            <img className="logo" src={Logo} alt="pencil and paintbrush logo"></img>
            <div><input onChange={this.handleChange} value={this.state.firstName} type="text" name="firstName" className="inp" placeholder="First Name" /></div>
            <div><input onChange={this.handleChange} value={this.state.lastName} type="text" name="lastName" className="inp" placeholder="Last Name" /></div>
            <div><input onChange={this.handleChange} value={this.state.username} type="text" name="username" className="inp" placeholder="Username" /></div>
            <div><input onChange={this.handleChange} value={this.state.password} type="password" name="password" className="inp" id="inputpswd" placeholder="Password" /></div>
            <div><input value="Sign Up" type="submit" className="button"></input></div>
          </form>
        </div >
      </div>
    )
  }
}
