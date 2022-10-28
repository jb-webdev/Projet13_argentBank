import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectUser } from '../../../store/features/userSlice.js'

export  const SingInBtn = () => {

    const user = useSelector(selectUser)

    return (
        <>
            <Link className="main-nav-item" to="/signin">
                <i className="fa fa-user-circle"></i>
                {user ? `${user.firstname}` : "Sign In"}
            </Link>
        </>
    )
}
