import React from 'react'
import './LoginForm.css'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"

import { loginUser } from '../../services/requestApi'

// for validate form
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
// =================


export const SignIn = () => {
  const displayTitle = useSelector((state) => state.UserState.titleSignin)
  const messageErrorApi = useSelector((state) => state.UserState.messageErrorApi)
  const navigate = useNavigate()
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
  const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(validationSchema), })

  const { errors } = formState

  const dispatch = useDispatch()

  const onSubmit = data => {
    loginUser(data, dispatch, navigate)
  }

  return (
    <>
      {displayTitle ? <h2>You can use your credentials to log in</h2> : ''}
      <form onSubmit={handleSubmit(onSubmit)}>
        {messageErrorApi && <p className="errorINputMessageApi">{messageErrorApi}</p>}
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
      </form>
    </>
  )
}
