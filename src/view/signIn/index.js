import React from 'react'
import './sigIn.css'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'


// <i className="fa fa-user-circle sign-in-icon"></i>

export default function SingIn() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FaUserCircle />
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>

          <Link to="/user" className="sign-in-button">Sign In</Link>

          <button className="sign-in-button">Sign In</button>

        </form>
      </section>
    </main>
  )
}
