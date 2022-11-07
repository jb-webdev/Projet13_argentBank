import React from 'react'
import './login.css'
import { SignIn } from '../../components/login/SignIn.js'
import { SignUp } from '../../components/login/SignUp.js'

import { useDispatch } from 'react-redux'
import { DisplayModalLogin } from '../../store/features/userSlice'
import { useSelector } from "react-redux"

export default function LogIn() {
  const dispatch = useDispatch()
  const modalIsOpen = useSelector((state) => state.UserState.modalLogin)
  

  if (modalIsOpen) {
    return (
      <main className="main bg-dark centerElement">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign Up</h1>
          <SignUp />
          <button className='selectFormBtn' onClick={() => dispatch(DisplayModalLogin())} >Already customer</button>
        </section>
      </main>
    )
  } else {
    return (
      <main className="main bg-dark centerElement">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <SignIn />
          <button className='selectFormBtn' onClick={() => dispatch(DisplayModalLogin())} >become a customer</button>
        </section>
      </main>
    )

  }
}