import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { login } from "../../store/features/userSlice.js"
import './Login.css'

export const Login = () => {
  const navigate = useNavigate()

  const [userEmail, setUserEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({
      firstname: "Tony",
      lastname: "Jarvis",
      email: userEmail,
      password: password,
      loggedIn: true,

    }))
    navigate('/user')
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-wrapper">
          <label>Email</label>
          <input 
            type="email" 
            id="username" 
            value={userEmail} 
            onChange={(e) => setUserEmail(e.target.value)} 
          />
        </div>
        <div className="input-wrapper">
          <label>Password</label>
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
          <label>Remember me</label>
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
