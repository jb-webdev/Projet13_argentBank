import React from 'react'
import './sigIn.css'
import { FaUserCircle } from 'react-icons/fa'
import { Login } from '../../components/login/Login.js'


// <i className="fa fa-user-circle sign-in-icon"></i>

export default function SingIn() {
  

  return (
    <main className="main bg-dark centerElement">
      <section className="sign-in-content">
        <FaUserCircle />
        <h1>Sign In</h1>
        <Login />
      </section>
    </main>
  )
}
