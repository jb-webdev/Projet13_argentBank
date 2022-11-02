import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

export const SingInBtn = () => {
    const isUserLoggedIn = useSelector((state) => state.UserState.loggedIn)
    const firstname = useSelector((state) => state.UserState.firstName)
    return (
        <>
            {isUserLoggedIn ?
                <Link className="main-nav-item" to="/user">
                    <i className="fa fa-user-circle"></i>
                    {firstname}
                </Link> 
                :
                <Link className="main-nav-item" to="/signin">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            }
        </>
    )
}
