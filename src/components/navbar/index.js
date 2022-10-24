import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'
import Logo from '../../assets/img/argentBankLogo.png'
/**<i className="fa fa-user-circle"></i> */
export default function NavBar() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/signin">
          Sign In
        </Link>
      </div>
    </nav>
  )
}
