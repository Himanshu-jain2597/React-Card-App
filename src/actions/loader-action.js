import { SHOW_LOADER } from "../actionTypes/type";

/**
 * function to show loader. loader can be used while fetching data from API.
 * @returns 
 */
export const showLoading = () => {
    return {
        type : SHOW_LOADER,
        payload:true
    }
}

export const hideLoading = () => {
    return {
        type : SHOW_LOADER,
        payload:false
    }
}