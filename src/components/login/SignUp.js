import React from 'react'
import './LoginForm.css'
import { BASE_URL } from '../../services/fetchApi.js'
import fetchApi from '../../services/fetchApi.js'
// for validate form
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
// =================


import { useDispatch } from 'react-redux'
import { DisplayTitleSignin, DisplayModalLogin } from '../../store/features/userSlice'


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
    const postApi = async () => {
      const bodyPost = {
        email: data.email,
        password: data.password,
        firstName: data.firstname,
        lastName: data.lastname
      }
      const response = await fetchApi({
        url: `${BASE_URL}/user/signup/`,
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyPost)
      })

      if (response?.status === 200) {
        dispatch(DisplayTitleSignin())
        dispatch(DisplayModalLogin())
      } else {
        console.log(response.status)
      }
    }
    postApi()
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