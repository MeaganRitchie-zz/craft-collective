import React from 'react'

export default function CreateForm(props) {

  const handleTitleChange = event => props.setTitle(event.target.value)
  const handleImageChange = event => props.setImage(event.target.value)
  const handleSuppliesChange = event => props.setSupplies(event.target.value)
  const handleDirectionsChange = event => props.setDirections(event.target.value)

  const submitNewCraft = () => {
    let token = localStorage.getItem("token")
    fetch("https://craft-collective-api.herokuapp.com/crafts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: props.title,
        image: props.image,
        supplylist: props.supplies,
        description: props.directions,
        user_id: props.user.id
      })
    })
      .then(response => response.json())
      .then(user => props.setUser(user))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    closeModal()
    submitNewCraft()
  }

  const closeModal = (_) => {
    props.setCreateNew(false)
  }

  return (
    <div className="edit-container">
      <form onSubmit={handleSubmit} id="edit-form" className="edit-form">
        <label>Craft Title</label>
        <input name="title" value={props.title} onChange={handleTitleChange} />
        <label>Image</label>
        <input name="image" value={props.image} onChange={handleImageChange} />
        <label>Supply List</label>
        <textarea rows={5} id="supplies" name="supplies" value={props.supplies} onChange={handleSuppliesChange} />
        <label>Directions</label>
        <textarea rows={5} id="directions" name="directions" value={props.directions} onChange={handleDirectionsChange} />
        <input id="edit-button" type="submit" value="Create" />
      </form>
    </div>
  )

}
