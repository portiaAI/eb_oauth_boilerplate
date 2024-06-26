import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [user, setUser] = useState('')

  useEffect(() => {
    const cookies = document.cookie.split('; ').map(cookie => cookie.split('='))

    const userCookie = cookies.filter(cookie => cookie[0] === 'username')

    if (userCookie.length) setUser(userCookie[0][1])
  },[])

  const handleLogin = async () => {
    // Retrieve Google Authentication url from the server
    const url = (await axios.get('api/redirectUrl')).data

    // Redirect to the Google Authentication page
    window.location.href = url
  }

  const handleLogout = () => {
    document.cookie = "username= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    setUser('')
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