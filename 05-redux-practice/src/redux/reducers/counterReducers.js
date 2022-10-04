import ActionTypes from "../actionTypes";



const initialState = 0;

const numReducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.count.INCREASE:
            return state + action.payload

        case ActionTypes.count.DECREASE:
            return state - action.payload


        default:
            return state;
    }

}

export default numReducer