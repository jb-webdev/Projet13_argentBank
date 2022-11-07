import React, { useState } from 'react'
import './LoginForm.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { UserSignIn } from '../../store/features/userSlice'
import { useSelector } from "react-redux"

// for validate form
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
// =================

import { BASE_URL } from '../../services/fetchApi.js'
import fetchApi from '../../services/fetchApi.js'

export const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const displayTitle = useSelector((state) => state.UserState.titleSignin)
  // for validate form
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("email invalide")
      .required("l'email est obligatoire"),
    password: Yup.string()
      .required("Mot de passe est obligatoire")
      .matches(/([0-9])/, "Au moins un entier")
      .min(8, "Mot de passe doit être plus grand que 8 caractères")
      .max(50, "Mot de passe doit être plus petit que 50 caractères"),
  })
  const { register, handleSubmit, formState, reset } = useForm({resolver: yupResolver(validationSchema),})

  const { errors } = formState

  const [errorMessageApi, setErrorMessageApi] = useState("")
 
  const onSubmit = data => {
    //console.log(data.email)
    //console.log(data.password)
    const postApi = async () => {
      const bodyPost = {
        email: data.email,
        password: data.password
      }
      const response = await fetchApi({
        url: `${BASE_URL}/user/login/`,
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyPost),
        errMsg: 'Fail to login ! Please Retry.'
      });
      try {
        if (response.status === 200) {
          if (response?.body?.token) {
            dispatch(UserSignIn({ token: response?.body?.token }))
          }
          navigate("/profile")
        } else {
          setErrorMessageApi("Password not correct !")
        }
      } catch (error) {
        setErrorMessageApi("Oups service connection failed! ! Please Retry.")
      }
    }
    postApi()

    reset()
  }
  
  return (
    <>
      {displayTitle ? <h2>You can use your credentials to log in</h2> : ''}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            type="email"
            id="email"
          />
          <p className="errorInputMessage">{errors.email?.message}</p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            {...register("password")}
            type="password"
            id="password"
          />
          <p className="errorInputMessage">{errors.password?.message}</p>
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
          />
          <label>Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">Sign In</button>
        {errorMessageApi ? <p id="erreurApi">{errorMessageApi}</p> : ''}
      </form>
    </>
  )
}