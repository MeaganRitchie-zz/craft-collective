import React from 'react'
import '../Card.css'

export default function Card() {

  /*const openEditForm = () => {
    set form state to open - modal opens
    render form component
  }*/

  return (
    <div className="card-container">
      <i className="far fa-edit"></i>
      <img className="card-image" src="https://images.unsplash.com/photo-1577547078777-ff1088d792b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" alt="" />
    </div>
  )
}
