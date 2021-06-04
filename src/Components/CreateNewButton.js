import React from 'react'
import { useState } from 'react'
import CreateForm from './CreateForm'

export default function CreateNewButton(props) {
  const [createNew, setCreateNew] = useState(false)

  const handleClick = () => {
    setCreateNew(true)
  }

  return (
    <>
      {createNew
        ? <CreateForm
          setCreateNew={setCreateNew}
          user={props.user} setUser={props.setUser}
          title={props.title} setTitle={props.setTitle}
          image={props.image} setImage={props.setImage}
          supplies={props.supplies} setSupplies={props.setSupplies}
          directions={props.directions} setDirections={props.setDirections}
        />
        : <div className="create-new">
          <i onClick={handleClick} className="fas fa-plus-circle"></i>
        </div>
      }
    </>
  )
}
