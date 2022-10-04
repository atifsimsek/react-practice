import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import actions from "../redux/actions/index"

export const Counter = () => {

  const count = useSelector(state => state.numReducer)
  console.log(count)
  const dispatch = useDispatch();


  return (
    <div className="box">
      <button onClick={() => { dispatch(actions.numActions.increase(1)) }} >Increase</button>
      <button onClick={() => { dispatch(actions.numActions.decrease(1)) }}>Decrase</button>
      <p>{count}</p>
    </div>
  )
}
