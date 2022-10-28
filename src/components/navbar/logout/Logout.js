import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { logout } from "../../../store/features/userSlice.js"




export const Logout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
        navigate('/') 
    }
    return (
        <>
            <Link className="main-nav-item" onClick={(e) => handleLogout(e)}>
                <i className="fa fa-sign-out"></i>
                Sign Out
            </Link>
        </>
    )
}

