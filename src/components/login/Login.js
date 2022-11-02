import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

import { useDispatch } from 'react-redux';
import { userRecup } from '../../store/features/userSlice';

/**
 * MODEL BDD
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    token: String,
 */

export const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [userEmail, setUserEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userFirstname, setUserFirstname] = useState("Tonny")
  const [userLastname, setUserLastname] = useState("Jarvis")
  const [token, setToken] = useState("TOKEN123456TOKEN")
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(userRecup({
      firstName : userFirstname,
      lastName: userLastname,
      email: userEmail,
      token:token
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