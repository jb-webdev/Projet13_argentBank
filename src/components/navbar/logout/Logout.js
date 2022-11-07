import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from "react-redux"
import { UserLogOut } from '../../../store/features/userSlice.js'

export const Logout = () => {
    const data = useSelector((state) => state.UserState);
    const dispatch = useDispatch();

    return (
        <>
            <Link className="main-nav-item"
                onClick={() => dispatch(UserLogOut({ ...data, loggedIn: false }))}
                to="/"
            >
                <i className="fa fa-sign-out"></i>
                Sign Out
            </Link>
        </>
    )
}