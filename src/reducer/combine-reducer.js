import { combineReducers } from "redux";

import loaderReducer from "./loader-reducer";

const mainReducer = combineReducers({
    loading:loaderReducer
})

export default mainReducer;