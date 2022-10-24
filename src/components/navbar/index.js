import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'
import Logo from '../../assets/img/argentBankLogo.png'

import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'


/**<i className="fa fa-user-circle"></i> */
export default function NavBar() {
  const iconStyle = {color: "#2c3e50"}
  //const style = { color: "white", fontSize: "1.5em" }
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className='main-link-signin'>
        <Link className="main-nav-item" to="/signin">
          <FaUserCircle style={iconStyle} />
          Sign In
        </Link>
        <Link className="main-nav-item" to="/">
          <FaSignOutAlt />
          Sign Out
        </Link>
      </div>
    </nav>
  )
}
