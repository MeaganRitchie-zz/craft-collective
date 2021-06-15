import './App.css';
import { useState, useEffect } from 'react'
import ScallopedHeader from './Components/ScallopedHeader';
import NavBar from './Components/NavBar';
import EnterForms from './Components/EnterForms'
import Footer from './Components/Footer'


const baseUrl = "https://craft-collective-api.herokuapp.com/"

function App() {
  const [user, setUser] = useState({})

  const [error, setError] = useState("")

  useEffect(() => {
    let token = localStorage.getItem("token") /*put this in it's own function and send around to toher components if needed*/
    if (token) {
      fetch(baseUrl + "profile", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(user => {
          if (user.id) {
            setUser(user)
          }
        })
    }

  }, [])

  const signUp = (user) => {
    fetch(baseUrl + "users", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          name: `${user.firstName} ${user.lastName}`,
          username: user.username,
          password: user.password
        }
      })
    })
      .then(response => response.json())
      .then(newUser => {
        setUser(newUser)
        localStorage.setItem("token", newUser.token)
      })
  }

  const login = (username, password) => {
    fetch(baseUrl + "login", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    })
      .then(response => response.json())
      .then(result => {
        if (result.token) {
          localStorage.setItem('token', result.token)
          setUser(result.user)
        } else {
          setError(result.error)
        }
      })
  }

  return (
    <>
      <NavBar setUser={setUser} />

      {user.username
        ? <ScallopedHeader user={user} setUser={setUser} />
        : <EnterForms setUser={setUser} login={login} signUp={signUp} error={error} user={user} />
      }
      {/* <EditForm />
      <CreateForm /> */}
      <Footer />


    </>
  );
}

export default App;
