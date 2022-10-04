
import ActionTypes from "../actionTypes";



const initialState = {
    backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "300px",
    height: "300px",
    margin: "auto"
};



const themeReducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.theme.DARK_THEME:
            return {
                ...state,
                backgroundColor: action.payload,
                width: "500px",
                height: "500px",
                border:"none"

            }

        case ActionTypes.theme.LİGHT_THEME:
            return {
                ...state,
                backgroundColor: action.payload.color,
                width: "700px",
                height: "500px",
                border: action.payload.border
            }


        default:
            return state;
    }

}

export default themeReducer