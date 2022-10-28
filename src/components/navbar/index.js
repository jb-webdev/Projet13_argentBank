import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'

import Logo from '../../assets/img/argentBankLogo.png'
import { Logout } from './logout/Logout.js'
import { SingInBtn } from './SignIn/SingInBtn.js'

import { useSelector } from 'react-redux'
import {selectUser} from '../../store/features/userSlice.js'


export default function NavBar() {

  const user = useSelector(selectUser)

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className='main-link-signin'>
        <SingInBtn />
        {user ? <Logout /> : "" }
      </div>
    </nav>
  )
}
