import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import actions from "../redux/actions/index"



export const Themes = () => {

  const theme = useSelector(state => state.themeReducer)

  const dispatch = useDispatch()
  return (
    <div style={theme} className="box">
      <button onClick={() => { dispatch(actions.themeActions.darkTheme("#e0e0e0")) }}>Dark Theme</button>
      <button onClick={() => { dispatch(actions.themeActions.lightTheme({ color: "skyblue", border: "10px solid rgba(91, 161, 226, 0.796)" })) }} >Light Theme</button>
    </div>
  )
}
