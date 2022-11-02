/**
 * model bdd 
    email: String,
    password: String,
    firstName: String,
    lastName: String
 */
// il me faut une action 
// => por recuperer les donnée utilisateur sur la page login
// => pour recuprere les donnée a afficher sur la page profil
// => pour deconnecter l'utilisateur et remetre le state a zéro
// => pour mettre a jour le nom et prénom de l'utilisateur sur la page profile

import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "userslice",
    initialState: 
        {
            firstName : "",
            lastName: "",
            email: "",
            token: "",
            loggedIn: false,
            editProfile: false,
        },

    reducers:{
        userRecup:(state,action) => { 
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.email = action.payload.email
            state.token = action.payload.token
            state.loggedIn = true
        },
        UserUpdateProfile:(state,action) => { 
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        },
        UserLogOut:(state,action) => {
            state.loggedIn = false
        },
        UserChangeProfile:(state,action) => {
            state.lastName = action.payload.lastName 
        },
        UserEditProfile:(state, action) => {
            state.editProfile = !state.editProfile
        }
    }
})
export const { userRecup } = userSlice.actions
export const { UserUpdateProfile } = userSlice.actions
export const { UserLogOut } = userSlice.actions
export const { UserChangeProfile } = userSlice.actions
export const { UserEditProfile } = userSlice.actions

export default userSlice.reducer