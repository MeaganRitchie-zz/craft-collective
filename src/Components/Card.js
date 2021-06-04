import React from 'react'
import '../Card.css'
import CardFront from './CardFront'
import CardDetails from './CardDetails'
import { useState } from 'react'

export default function Card(props) {

  /*const openEditForm = () => {
    set form state to open - modal opens
    render form component
  }*/
  const [detailsClicked, setDetailsClicked] = useState(false)

  const handleClick = (_) => {
    setDetailsClicked(!detailsClicked)
  }

  return (
    <div className="card-container">
      <CardFront craft={props.craft} handleClick={handleClick} />
      <CardDetails craft={props.craft} detailsClicked={detailsClicked} />
    </div>
  )
}
