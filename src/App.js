import './App.css';
import { useState } from 'react'
import ScallopedHeader from './Components/ScallopedHeader';
import SignUp from './Components/SignUp';
import NavBar from './Components/NavBar';
import Login from './Components/Login'

function App() {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const signUp = (user) => {
    fetch("http://localhost:3000/users", {
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
      .then(user => setUser(user))
  }

  return (
    <>
      <NavBar />
      {isLoggedIn ?
        <Login setIsLoggedIn={setIsLoggedIn} /> :
        <SignUp signUp={signUp} user={user} />
      }

      <ScallopedHeader />

    </>
  );
}

export default App;
