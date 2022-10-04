import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color:""
}

const ThemeSlice = createSlice({
    name: "Theme",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.color = action.payload
        }
    }
})



export const themeReducer = ThemeSlice.reducer

export const {setTheme} = ThemeSlice.actions