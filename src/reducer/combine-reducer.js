import { combineReducers } from "redux";

import loaderReducer from "./loader-reducer";
import confirmationReducer from "./confirmation-reducer";

const mainReducer = combineReducers({
    loading:loaderReducer,
    confirm:confirmationReducer
});

export default mainReducer;