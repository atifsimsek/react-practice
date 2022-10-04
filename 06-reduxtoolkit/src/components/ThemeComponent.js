import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { setTheme } from '../store/future/theme/ThemeSlice';


const ThemeComponent = () => {

    const dispatch = useDispatch();

    const [color, setColor] = useState("");




    return (
        <div>
            <h1>ThemeComponent</h1>
            <input onChange={(e) => { setColor(e.target.value) }} type="text" />
            <button onClick={() => { dispatch(setTheme(color)) }}>Change Theme</button>

        </div>
    )
}



export default ThemeComponent;
