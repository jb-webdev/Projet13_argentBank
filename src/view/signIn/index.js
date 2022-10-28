import React from 'react'
import './sigIn.css'
import { Login } from '../../components/login/Login.js'


// <i className="fa fa-user-circle sign-in-icon"></i>

export default function SingIn() {
  

  return (
    <main className="main bg-dark centerElement">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Login />
      </section>
    </main>
  )
}
