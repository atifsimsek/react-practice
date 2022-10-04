import numReducer from "./counterReducers";
import { combineReducers } from "redux";
import themeReducer from "./themeReducers";


const reducers = combineReducers({ numReducer, themeReducer });



export default reducers;