import React from "react"
import { Routes, Route } from 'react-router-dom'

import Home from "../view/home/index.js"
import SignIn from "../view/signIn/index.js"
import User from "../view/user/index.js"
import Error from '../view/error/index.js'


export default function AppRouter() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SignIn/>} />
            <Route path='/user' element={<User/>} />
            <Route path='/*' element={<Error />} />
        </Routes>
        </>
    )
}