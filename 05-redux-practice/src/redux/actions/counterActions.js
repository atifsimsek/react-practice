import ActionTypes from "../actionTypes";

const increase = (val) => {
    return {
        type: ActionTypes.count.INCREASE,
        payload: val
    }

}
const decrease = (val) => {
    return {
        type: ActionTypes.count.DECREASE,
        payload: val
    }

}

const numActions = {increase,decrease}

export default numActions