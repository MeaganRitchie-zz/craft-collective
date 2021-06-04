import React from 'react'

export default function CardDetails(props) {

  const isClickedCardDetailClass = () => {
    return props.detailsClicked
      ? "card-detail"
      : "card-detail text-shrink"
  }

  return (
    <div id="card-details" className={props.detailsClicked ? "inner-card grow" : "inner-card"}>
      <h3 className={isClickedCardDetailClass()}>{props.craft.name}</h3>
      <h4 className={isClickedCardDetailClass()}>Supplies Needed</h4>
      <p className={isClickedCardDetailClass()}>{props.craft.supplylist}</p>
      <h4 className={isClickedCardDetailClass()}>Directions</h4>
      <p className={isClickedCardDetailClass()}>{props.craft.description}</p>
    </div>
  )
}
