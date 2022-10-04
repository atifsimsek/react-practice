import React from 'react'
import { useDispatch } from "react-redux"
import { loginAction, logoutAction } from "../store/future/login/LoginSlice"




const LoginComponent = () => {
    const dispatch = useDispatch();

    
    return (
        <div>
            <h1>LoginComponent</h1>
            <button onClick={() => { dispatch(loginAction({ name: " Admin", surname: " Test" })) }}>Login</button>
            <button onClick={() => { dispatch(logoutAction()) }} >LogOut</button>
        </div>
    )
}



export default LoginComponent;