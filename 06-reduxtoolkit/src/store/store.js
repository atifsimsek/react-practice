import { loginReducer } from "./future/login/LoginSlice";
import { themeReducer } from "./future/theme/ThemeSlice";
import { todoReducer } from "./future/todo/TodoSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";



const rootReducer = combineReducers({
    loginReducer, themeReducer, todoReducer
});




export const setupStore = () => {

    return configureStore({
        reducer: rootReducer
    })


}