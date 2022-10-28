import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSignOutAlt } from 'react-icons/fa'

import { useDispatch } from 'react-redux'
import { logout } from "../../../store/features/userSlice.js"




const Logout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
        navigate('/') 
    }
    return (
        <>
            <button className="main-nav-item" onClick={(e) => handleLogout(e)}>
                <FaSignOutAlt />
                Sign Out
            </button>
        </>
    )
}

export default Logout