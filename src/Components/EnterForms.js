import React from 'react'
import { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

export default function EnterForms(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <div>
      {isLoggedIn
        ? <Login setUser={props.setUser} login={props.login} error={props.error} user={props.user} setIsLoggedIn={setIsLoggedIn} />
        : <SignUp setUser={props.setUser} signUp={props.signUp} user={props.user} setIsLoggedIn={setIsLoggedIn} />
      }
    </div>
  )
}
