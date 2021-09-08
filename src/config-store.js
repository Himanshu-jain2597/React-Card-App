import {createStore} from "redux";

import mainReducer from "./reducer/combine-reducer";

 const configStore = () => {
    return createStore(
        mainReducer
    )
}

export default configStore;