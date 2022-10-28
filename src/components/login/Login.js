import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { login } from "../../store/features/userSlice.js"
import './Login.css'

export const Login = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({
      username: username,
      password: password,
      loggedIn: true,

    }))
    navigate('/user')
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-wrapper">
          <label for="username">Username</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div className="input-wrapper">
          <label for="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <div className="input-remember">
          <input 
            type="checkbox" 
            id="remember-me" 
          />
          <label for="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">Sign In</button>
      </form>
    </>
  )
}


/**
 * model bdd 
    email: String,
    password: String,
    firstName: String,
    lastName: String
 */
