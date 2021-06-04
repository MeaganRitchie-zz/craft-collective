import React from 'react'

export default function CardFront(props) {
  return (
    <div onClick={(event) => props.handleClick(event.target)} className="main-card inner-card">
      <i className="far fa-edit"></i>
      <img className="card-image" src={props.craft.image} alt={props.craft.title} />
    </div>

  )
}
