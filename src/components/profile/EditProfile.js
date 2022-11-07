import React, { useState } from 'react'
import './EditProfile.css'

import { useDispatch } from "react-redux";
import { UserEditProfile, UserUpdateProfile } from '../../store/features/userSlice.js'

import { useSelector } from "react-redux"

import fetchApi from '../../services/fetchApi.js'
import { BASE_URL } from '../../services/fetchApi.js';


export default function EditProfile() {
  const dispatch = useDispatch()
  const TOKEN = useSelector((state) => state.UserState.token)
  const firstname = useSelector((state) => state.UserState.firstName)
  const lastname = useSelector((state) => state.UserState.lastName)

  const [changeFirstname, setChangeFirstname] = useState("")
  const [changeLastname, setChangeLastname] = useState("")
  const [errorMessageApi, setErrorMessageApi] = useState("")

  const handleSave = (e) => {
    e.preventDefault()
    if (!changeFirstname || !changeLastname || changeFirstname.length < 3 || changeLastname.length < 3){
      setErrorMessageApi("veuillez remplir tous les champs ! Merci")
    } else {
      setErrorMessageApi("")
      const postApi = async () => {
        const response = await fetchApi({
          url: `${BASE_URL}/user/profile`,
          method: 'PUT',
          headers: { 'Content-type': 'application/json; charset=UTF-8', Authorization: 'Bearer' + TOKEN },
          body: JSON.stringify({ firstName: changeFirstname, lastName: changeLastname }),
          errMsg: 'Fail to update ! Please Retry.'
        });
        try {
          if (response.status === 200) {
            dispatch(UserUpdateProfile({ firstName: response.body.firstName, lastName: response.body.lastName }))
            dispatch(UserEditProfile())
          }
        } catch (error) {
          setErrorMessageApi("Oups service connection failed! ! Please Retry.")
        }
      }
      postApi()
    }
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
            onClick={(e) => handleSave(e)}
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
        <p id="errorMessageApi">{errorMessageApi}</p>
      </form>
    </div>
  )
}