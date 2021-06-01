import React from 'react'
import Card from './Card.js'

export default function ScallopedHeader() {
  return (
    <div>
      <div className="app">
        <div className="scallop"> <p> YOUR CRAFTS </p></div>
        <div className="after-scallop">
          <div className="card-container">
            <Card />
          </div>
        </div>

      </div>
    </div>
  )
}
