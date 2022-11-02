import React, { useState } from 'react'
import './EditProfile.css'

import { useDispatch } from "react-redux";
import { UserEditProfile, UserUpdateProfile } from '../../store/features/userSlice.js'

import { useSelector } from "react-redux"

export default function EditProfile() {
  const firstname  = useSelector((state) => state.UserState.firstName)
  const lastname  = useSelector((state) => state.UserState.lastName)
  const [changeFirstname, setChangeFirstname] =  useState("")
  const [changeLastname, setChangeLastname] =  useState("")
  const dispatch = useDispatch()

  const handleSave = (e) => {
    e.preventDefault()
    dispatch(UserUpdateProfile({
      firstName : changeFirstname,
      lastName: changeLastname,
    }))
    dispatch(UserEditProfile())
  }
 
  return (
    <div className='editprofile '>
      <form className='editprofile__form'>
        <div className='ediprofile__wrapperinput'>
          <input 
            className='editprofile__input' 
            type='text' 
            placeholder={firstname}
            onChange={(e) => setChangeFirstname(e.target.value)}
          />
          
          <input 
            className='editprofile__input' 
            type='text' 
            placeholder={lastname}
            onChange={(e) => setChangeLastname(e.target.value)}
          />
        </div>

        <div className='ediprofile__wrapperinput'>
          <button 
            className='editprofile__btn' 
            onClick={(e)=> handleSave(e)} 
          >
              Save
          </button>
          <button 
            className='editprofile__btn' 
            onClick={() => dispatch(UserEditProfile())} 
          >
              Cancel
          </button>
        </div>
      </form>
    </div>
  )
}