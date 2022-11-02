import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'

import Logo from '../../assets/img/argentBankLogo.png'
import {SingInBtn} from './SignIn/SingInBtn.js'
import {Logout} from './logout/Logout.js'


import { useSelector } from "react-redux"

export default function NavBar() {
  const isUserLoggedIn = useSelector((state) => state.UserState.loggedIn);
  
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className='main-link-signin'>
      <SingInBtn />
      {isUserLoggedIn ?  <Logout /> : ""}
      </div>
    </nav>
  )
}
