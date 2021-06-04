import React from 'react'
import Card from './Card.js'
import { useState } from 'react'
import CreateNewButton from './CreateNewButton.js'

export default function ScallopedHeader(props) {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [supplies, setSupplies] = useState("")
  const [directions, setDirections] = useState("")


  const renderCards = () => {
    return props.user.crafts?.map(craft => {
      return <Card craft={craft} key={craft.id} />
    })
  }

  return (
    <div>
      <div className="app">
        <div className="scallop">
          <h4>Hi, {props.user.name}!</h4>
          <p id="username">@{props.user.username}</p>
          <p id="crafts-title"> YOUR CRAFTS </p></div>
        <div className="after-scallop">
          <div className="display-cards">
            {renderCards()}
            <CreateNewButton
              user={props.user} setUser={props.setUser}
              title={title} setTitle={setTitle}
              image={image} setImage={setImage}
              supplies={supplies} setSupplies={setSupplies}
              directions={directions} setDirections={setDirections}
            />
          </div>
        </div>

      </div>
    </div>
  )
}
