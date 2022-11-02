import React from 'react'
import './user.css'
import Account from '../../components/account/index.js'
import EditProfile from '../../components/profile/EditProfile.js'
import Error from '../error/index.js'

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { UserEditProfile } from '../../store/features/userSlice.js'

export default function User() {

  const isUserLoggedIn = useSelector((state) => state.UserState.loggedIn)
  const firstname = useSelector((state) => state.UserState.firstName)
  const lastname = useSelector((state) => state.UserState.lastName)
  const editProfile = useSelector((state) => state.UserState.editProfile)

  const dispatch = useDispatch()

  return (
    <>
      {isUserLoggedIn ?
        <main className="main bg-dark">
          <div className="header">
            <h1>Welcome back<br />{firstname} {lastname}</h1>
            {!editProfile ?
              <button
                className="edit-button"
                onClick={() => dispatch(UserEditProfile())}
              >Edit Name</button>
              :
              <EditProfile />
            }
          </div>
          <h2 className="sr-only">Accounts</h2>
          <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
          <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
          <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
        </main> :
        <Error />
      }
    </>
  )
}