import {SHOW_CONFIRMATION} from "../actionTypes/type";
/**
 * confirmation action. this is used to show confirmation
 */
export const showConfirmation = (confirm) => {
    const payload = {...confirm , show:true}
    return {type:SHOW_CONFIRMATION,payload}

}

/**
 * confirm action . this is used to hide confirmation
 * @returns 
 */
export const hideConfirmation = () => {
    const payload = {show:false}
    return {type:SHOW_CONFIRMATION,payload}
}