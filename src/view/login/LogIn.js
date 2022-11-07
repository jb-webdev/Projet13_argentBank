import React, { useState } from 'react'
import './login.css'
import { SignIn } from '../../components/login/SignIn.js'
import { SignUp } from '../../components/login/SignUp.js'

export default function LogIn() {
  const [wantToRegister, setWantToRegister] = useState(false)
  const handleChangeForm = (e) => {
    e.preventDefault()
    setWantToRegister(!wantToRegister)
  }

  if (wantToRegister) {
    return (
      <main className="main bg-dark centerElement">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign Up</h1>
          <SignUp />
          <button className='selectFormBtn' onClick={(e) => handleChangeForm(e)} >Already customer</button>
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
          <button className='selectFormBtn' onClick={(e) => handleChangeForm(e)} >become a customer</button>
        </section>
      </main>
    )

  }
}