import React from 'react'
import { useSelector } from "react-redux"



const ProfileComponent = () => {


  const state = useSelector(state => state.loginReducer.value)

  const theme = useSelector(state => state.themeReducer)

  return (
    <div style={{ color: theme.color }}>
      <h1>ProfileComponent</h1>
      <p>Name :{state.name}</p>
      <p>Surname :{state.surname}</p>
    </div>
  )
}



export default ProfileComponent;