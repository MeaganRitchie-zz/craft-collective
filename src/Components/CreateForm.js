import React, { Component } from 'react'

export default class EditForm extends Component {

  state = {
    craftTitle: "",
    craftImage: "",
    craftSupplies: "",
    craftDirections: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    /*function to set state to inputs
    POST req to create method*/
  }

  render() {
    return (
      <div className="edit-container">
        <form className="edit-form">
          <label>Craft Title</label>
          <input name="crafTitle" value={this.state.craftTitle} onChange={this.handleChange} />
          <label>Image</label>
          <input name="craftImage" value={this.state.craftImage} onChange={this.handleChange} />
          <label>Supply List</label>
          <textarea rows={5} id="supplies" name="craftSupplies" value={this.state.craftSupplies} onChange={this.handleChange} />
          <label>Directions</label>
          <textarea rows={5} id="directions" name="craftDirections" value={this.state.craftDirections} onChange={this.handleChange} />
          <input id="edit-button" type="submit" value="Create" />
        </form>
      </div>
    )
  }
}
