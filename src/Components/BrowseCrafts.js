import React from 'react'
import Card from './Card.js'

export default function ScallopedHeader(props) {
  return (
    <div>
      <div className="app">
        <div className="scallop">
          <h4>Hi, {props.user.name}!</h4>
          <p id="username">@{props.user.username}</p>
          <p id="crafts-title"> YOUR CRAFTS </p></div>
        <div className="after-scallop">
          <div className="card-container">
            <Card />
          </div>
        </div>

      </div>
    </div>
  )
}
