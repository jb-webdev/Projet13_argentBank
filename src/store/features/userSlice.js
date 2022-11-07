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
    },

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
        },

        UserChangeProfile: (state, action) => {
            state.lastName = action.payload.lastName
        },
        UserEditProfile: (state, action) => {
            state.editProfile = !state.editProfile
        },
    }
})

export const { UserSignIn } = userSlice.actions
export const { UserLogOut } = userSlice.actions
export const { UserRecup } = userSlice.actions
export const { UserUpdateProfile } = userSlice.actions
export const { UserChangeProfile } = userSlice.actions
export const { UserEditProfile } = userSlice.actions


export default userSlice.reducer