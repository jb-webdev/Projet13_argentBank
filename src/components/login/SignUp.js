import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginForm.css'

import { useDispatch } from 'react-redux';
import { userRecup } from '../../store/features/userSlice';


import { BASE_URL } from '../../services/fetchApi.js';
import fetchApi from '../../services/fetchApi.js'


export const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [firstname, setUserFirstname] = useState("")
  const [lastname, setUserLastname] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-wrapper">
          <label>Firstname</label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setUserFirstname(e.target.value)}
          />
          <p id="erreurFirstname"></p>
        </div>
        <div className="input-wrapper">
          <label>Lastname</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setUserLastname(e.target.value)}
          />
          <p id="erreurLastname"></p>
        </div>
        <div className="input-wrapper">
          <label>Email</label>
          <input
            type="email"
            id="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <p id="erreurEmail"></p>
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
        <button type="submit" className="sign-in-button">Sign Up</button>
      </form>
    </>
  )
}