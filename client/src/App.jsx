import { useState } from 'react'
import './App.css'

function App() {

  const [user, setUser] = useState('')

  const handleLogin = () => {
    
  }

  const handleLogout = () => {
    
  }

  return (
    <>
      <h1>OAuth Setup Tutorial</h1>
      {!user ? 
        <button className='loginButton' onClick={handleLogin}>
          <img className='logo' src='./GoogleLogo.svg.png'/>
          Log In With Google
        </button> 
        :
        <>
          <h2>Welcome Back {user}</h2>
          <button className='logoutButton' onClick={handleLogout}>Logout</button>
        </>
      }
    </>
  )
}

export default App