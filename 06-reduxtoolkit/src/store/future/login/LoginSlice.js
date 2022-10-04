import { createSlice } from "@reduxjs/toolkit";


const initialState = { name: "", surname: "" }


export const LoginSlice = createSlice({
    name: "login",
    initialState: { value: initialState },
    reducers: {
        loginAction: (state, action) => {
            state.value.name = action.payload.name
            state.value.surname = action.payload.surname
        },
        logoutAction: (state) => {
            state.value = initialState;
        }
    }
})

export const loginReducer = LoginSlice.reducer
export const { loginAction, logoutAction } = LoginSlice.actions