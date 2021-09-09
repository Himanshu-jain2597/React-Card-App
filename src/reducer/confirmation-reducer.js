import { SHOW_CONFIRMATION } from "../actionTypes/type"



const confirmationReducer = (state = false,action) => {
    switch(action.type) {
        case SHOW_CONFIRMATION:
            return {...state,...action.payload}
        default:
            return state;
    }
}

export default confirmationReducer;