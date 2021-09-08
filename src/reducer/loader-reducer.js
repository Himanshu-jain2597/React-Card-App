import { SHOW_LOADER } from "../actionTypes/type"



const loaderReducer = (state = false,action) => {
    switch(action.type) {
        case SHOW_LOADER:
            return {...state,isLoading:action.payload}
        default:
            return state;
    }
}

export default loaderReducer;