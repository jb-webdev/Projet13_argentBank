import React from 'react'
import './LoginForm.css'
// for validate form
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
// =================


import { useDispatch } from 'react-redux'
import {singUpUser} from '../../services/requestApi.js'

export const SignUp = () => {
  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .required("ce champ est obligatoire")
      .min(3, "trop petit!")
      .max(50, "trop long!"),
    lastname: Yup.string()
      .required("ce champ est obligatoire")
      .min(3, "trop petit!")
      .max(50, "trop long!"),
    email: Yup.string()
      .email("email invalide")
      .required("l'email est obligatoire"),
    password: Yup.string()
      .required("Mot de passe est obligatoire")
      .matches(/([0-9])/, "Au moins un entier")
      .min(8, "Mot de passe doit être plus grand que 8 caractères")
      .max(50, "Mot de passe doit être plus petit que 50 caractères"),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        "Le mot de passe de confirmation ne correspond pas"
      ),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "Accepter les conditions est obligatoire"
    ),
  })
  
  const { register, handleSubmit, formState, reset } = useForm({resolver: yupResolver(validationSchema),})
  
  const { errors } = formState
  
  const dispatch = useDispatch()
        
  const onSubmit = data => {
    singUpUser(data, dispatch)
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper">
          <label htmlFor="firstname">Firstname</label>
          <input
            {...register("firstname")}
            type="text"
            id="firstname"
          />
          <p className='errorInputMessage'>{errors.firstname?.message}</p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Lastname</label>
          <input
            {...register("lastname")}
            type="text"
            id="lastname"
          />
          <p className='errorInputMessage'>{errors.lastname?.message}</p>
        </div>
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
        <button type="submit" className="sign-in-button">Sign Up</button>
      </form>
    </>
  )
}