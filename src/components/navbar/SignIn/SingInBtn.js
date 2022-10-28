import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'


import { useSelector } from 'react-redux'
import { selectUser } from '../../../store/features/userSlice.js'

export const SingInBtn = () => {
    const iconStyle = { color: "#2c3e50" }

    const user = useSelector(selectUser)


    return (
        <>
            <Link className="main-nav-item" to="/signin">
                <FaUserCircle style={iconStyle} />
                {user ? `${user.username}` : "Sign In"}
            </Link>
        </>
    )
}
