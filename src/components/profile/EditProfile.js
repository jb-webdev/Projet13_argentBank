import React, { useState } from 'react'
import './EditProfile.css'

import { useDispatch } from "react-redux"
import { UserEditProfile, UserUpdateProfile } from '../../store/features/userSlice.js'

import { useSelector } from "react-redux"

import fetchApi from '../../services/fetchApi.js'
import { BASE_URL } from '../../services/fetchApi.js'

// for validate form
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
// =================


export default function EditProfile() {
  // for validate form
  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .required("ce champ est obligatoire")
      .min(3, "trop petit!")
      .max(50, "trop long!"),
    lastname: Yup.string()
      .required("ce champ est obligatoire")
      .min(3, "trop petit!")
      .max(50, "trop long!"),
  })
  const { register, handleSubmit, formState, reset } = useForm({resolver: yupResolver(validationSchema),})
  
  const { errors } = formState

  // =====
  const dispatch = useDispatch()
  const TOKEN = useSelector((state) => state.UserState.token)
  const firstnameStore = useSelector((state) => state.UserState.firstName)
  const lastnameStore = useSelector((state) => state.UserState.lastName)

  
  const [errorMessageApi, setErrorMessageApi] = useState("")

  const onSubmit = data => {
   const postApi = async () => {
    const response = await fetchApi({
      url: `${BASE_URL}/user/profile`,
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8', Authorization: 'Bearer' + TOKEN },
      body: JSON.stringify({ firstName: data.firstname, lastName: data.lastname}),
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
            placeholder={firstnameStore}
          />

          <input
            id="lastname"
            className='editprofile__input'
            {...register("lastname")}
            type="text"
            placeholder={lastnameStore}
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