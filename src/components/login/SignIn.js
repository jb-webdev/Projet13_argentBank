import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginForm.css'

import { useDispatch } from 'react-redux';
import { UserSignIn } from '../../store/features/userSlice';

import { BASE_URL } from '../../services/fetchApi.js';
import fetchApi from '../../services/fetchApi.js'

export const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [errorMessageApi, setErrorMessageApi] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const postApi = async () => {
      const bodyPost = {
        email: userEmail,
        password: userPassword
      }
      const response = await fetchApi({
        url: `${BASE_URL}/user/login/`,
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyPost),
        errMsg: 'Fail to login ! Please Retry.'
      });
      try {
        if (response.status === 200) {
          if (response?.body?.token) {
            dispatch(UserSignIn({ token: response?.body?.token }))
          }
          navigate("/profile")
        } else {
          setErrorMessageApi("Password not correct !")
        }
      } catch (error) {
        setErrorMessageApi("Oups service connection failed! ! Please Retry.")
      }
    }
    postApi()
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
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
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
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
        {errorMessageApi ? <p id="erreurApi">{errorMessageApi}</p> : ''}
      </form>
    </>
  )
}