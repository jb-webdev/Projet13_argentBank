import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "userslice",
    initialState:
    {
        loggedIn: false,
        token: "",
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        editProfile: false,
        titleSignin: false,
        modalLogin: false,
        errorApi: true,
        messageErrorApi: "",
        loading: "",
    },
    /*
    */
    reducers: {

        UserSignIn: (state, action) => {
            state.token = action.payload.token
            state.loggedIn = true
        },
        UserLogOut: (state, action) => {
            state.loggedIn = false
        },
        UserRecup: (state, action) => {
            state.id = action.payload.id
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.email = action.payload.email
        },
        UserUpdateProfile: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.editProfile = !state.editProfile
        },
        UserChangeProfile: (state, action) => {
            state.lastName = action.payload.lastName
        },
        UserEditProfile: (state, action) => {
            state.editProfile = !state.editProfile
        },
        DisplayTitleSignin: (state, action) => {
            state.titleSignin = !state.titleSignin
        },
        DisplayModalLogin: (state, action) => {
            state.modalLogin = !state.modalLogin
        },
        ErrorApi: (state, action) => {
            state.errorApi = action.payload.statusError
        },
        MessageErrorApi: (state, action) => {
            state.messageErrorApi = action.payload.messageErrorApi
        },
    }
})

export const { UserSignIn } = userSlice.actions
export const { UserLogOut } = userSlice.actions
export const { UserRecup } = userSlice.actions
export const { UserUpdateProfile } = userSlice.actions
export const { UserChangeProfile } = userSlice.actions
export const { UserEditProfile } = userSlice.actions
export const { DisplayTitleSignin } = userSlice.actions
export const { DisplayModalLogin } = userSlice.actions
export const { ErrorApi } = userSlice.actions
export const { MessageErrorApi } = userSlice.actions


export default userSlice.reducer