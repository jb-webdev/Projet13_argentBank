import React, { useState } from 'react'
import './EditProfile.css'

import { useDispatch } from "react-redux"
import { UserEditProfile } from '../../store/features/userSlice.js'

import { useSelector } from "react-redux"

// for validate form
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
// =================

import { updateProfilUser } from '../../services/requestApi.js'


export default function EditProfile() {
  // for validate form
  const validationSchema = Yup.object().shape({
    firstname: Yup.string(),
    lastname: Yup.string(),
  })
  const { register, handleSubmit, reset } = useForm({ resolver: yupResolver(validationSchema), })

  // =====
  const dispatch = useDispatch()
  const TOKEN = useSelector((state) => state.UserState.token)

  const firstnameStore = useSelector((state) => state.UserState.firstName)
  const lastnameStore = useSelector((state) => state.UserState.lastName)

  const [errorMessageApi] = useState("")

  const onSubmit = data => {

    var firstNameToPush = data.firstname
    if (!firstNameToPush) {
      firstNameToPush = firstnameStore
    }
    var lastNameToPush = data.lastname
    if (!lastNameToPush) {
      lastNameToPush = lastnameStore
    }
    var dataToSend = {
      firstName: firstNameToPush,
      lastName: lastNameToPush
    }
    updateProfilUser(dataToSend, dispatch, TOKEN)

    reset()
  }
  return (
    <div className='editprofile '>
      <form className='editprofile__form' onSubmit={handleSubmit(onSubmit)}>
        <div className='ediprofile__wrapperinput'>
          <input
            id="firstname"
            className='editprofile__input'
            {...register("firstname")}
            type="text"
            placeholder='change your firstname'
          />

          <input
            id="lastname"
            className='editprofile__input'
            {...register("lastname")}
            type="text"
            placeholder='change your lastname'
          />
        </div>

        <div className='ediprofile__wrapperinput'>
          <button
            className='editprofile__btn'
            type="submit"
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