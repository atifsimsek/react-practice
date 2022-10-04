import ActionTypes from "../actionTypes";


const lightTheme = (val) => {
    return {
        type: ActionTypes.theme.LİGHT_THEME,
        payload: val
    }

}


const darkTheme = (val) => {

    return {
        type: ActionTypes.theme.DARK_THEME,
        payload: val
    }

}

const themeActions = {lightTheme,darkTheme}

export default themeActions