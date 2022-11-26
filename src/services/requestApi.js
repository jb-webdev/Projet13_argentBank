import axios from "axios"

import {
    UserSignIn,
    DisplayTitleSignin,
    DisplayModalLogin,
    UserUpdateProfile,
    UserEditProfile,
    UserRecup,
    ErrorApi,
    MessageErrorApi,
} from "../store/features/userSlice"

export const BASE_URL = "http://localhost:3001/api/v1"

/**
 * Fonction pour connecter l'utilisateur
 * @param {Array} data 
 * @param {*} dispatch 
 * @param {Hooks} navigate 
 */
export const loginUser = (data, dispatch, navigate) => {
    var redirectProfil = false
    axios.post(`${BASE_URL}/user/login`, {
        email: data.email,
        password: data.password
    })
        .then((response) => {
            dispatch(UserSignIn({ token: response.data.body.token }))
            dispatch(ErrorApi({ statusError: false }))
            dispatch(MessageErrorApi({ messageErrorApi: '' }))
            return redirectProfil = true
        })
        .catch((error) => {
            if (error.request.status === 0) {
                dispatch(MessageErrorApi({ messageErrorApi: "Vérifier la connection de l'API !" }))
            } else {
                dispatch(MessageErrorApi({ messageErrorApi: error.response.data.message }))
            }
            dispatch(ErrorApi({ statusError: true }))
            return redirectProfil = false
        })
        .finally(() => {
            if (redirectProfil) {
                navigate('/profile')
            }
        })
}
//errorApi
/**
 * Fonction pour enregistrer l'utilisateur
 * @param {Array} data 
 * @param {*} dispatch 
 */
export const singUpUser = (data, dispatch, navigate) => {

    axios.post(`${BASE_URL}/user/signup/`, {
        email: data.email,
        password: data.password,
        firstName: data.firstname,
        lastName: data.lastname
    })
        .then((response) => {
            dispatch(DisplayTitleSignin())
            dispatch(DisplayModalLogin())
            dispatch(ErrorApi({ statusError: false }))

            //console.log("enregistrement réussi !")
        })
        .catch((err) => {
            console.log("erreur Api !")
            dispatch(ErrorApi({ statusError: true }))
        })
}

/**
 * Fonction pour modifier les parametre utilisateur
 * @param {Array} dataTosend 
 * @param {Hooks} dispatch 
 * @param {String} TOKEN 
 */
export const updateProfilUser = (dataTosend, dispatch, TOKEN) => {
    axios.put(`${BASE_URL}/user/profile`,
        dataTosend,
        { headers: { authorization: 'Bearer ' + TOKEN } }

    )
        .then((response) => {
            dispatch(UserUpdateProfile({ firstName: dataTosend.firstName, lastName: dataTosend.lastName }))
            dispatch(UserEditProfile())
            dispatch(ErrorApi({ statusError: false }))
        })
        .catch((err) => {
            console.log("erreur Api !")
            dispatch(ErrorApi({ statusError: true }))
        }).finally(() => {
            dispatch(UserEditProfile())
        })
}

/**
 * Request Api pour recuperer les données utilisateur
 * @param {*} dispatch 
 * @param {*} TOKEN 
 */
export const userProfil = (dispatch, TOKEN) => {
    axios.post(`${BASE_URL}/user/profile`,
        {},
        { headers: { authorization: 'Bearer ' + TOKEN } }

    )
        .then((response) => {
            //console.log(response.data.body) 
            dispatch(UserRecup({
                id: response.data.body.id,
                firstName: response.data.body.firstName,
                lastName: response.data.body.lastName,
                email: response.data.body.email,
            }))
            dispatch(ErrorApi({ statusError: false }))
        })
        .catch((err) => {
            console.log("erreur Api !")
            dispatch(ErrorApi({ statusError: true }))
        })
}
