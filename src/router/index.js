import React from "react"
import { Routes, Route } from 'react-router-dom'

import Home from "../view/home/Home.js"
import LogIn from "../view/login/LogIn.js"
import Profile from "../view/profile/Profile.js"
import Error from '../view/error/Error.js'


export default function AppRouter() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<LogIn/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/*' element={<Error />} />
        </Routes>
        </>
    )
}